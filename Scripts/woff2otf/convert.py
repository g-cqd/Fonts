import brotli
from fontTools.ttLib import TTFont
from fontTools.ttLib import woff2
import os
import sys

def convert(infilename, outdir):
    font = TTFont(infilename)

    # Extract the font family name and weight
    family_name = ""
    for record in font['name'].names:
        if record.nameID == 1 and not family_name:  # Family name
            if b'\000' in record.string:
                family_name = record.string.decode('utf-16-be')
            else:
                family_name = record.string.decode('utf-8')

    weight = font['OS/2'].usWeightClass

    # Construct the output filename
    outfilename = f"{family_name}-{weight}.otf"

    # Avoid overwrite: check if file already exists, if so append a number
    i = 1
    while os.path.exists(os.path.join(outdir, outfilename)):
        name, ext = os.path.splitext(outfilename)
        outfilename = f"{name}_{i}{ext}"
        i += 1

    with open(infilename , mode='rb') as infile:
        with open(os.path.join(outdir, outfilename), mode='wb') as outfile:
            woff2.decompress(infile, outfile)

    print(f"Converted {infilename} to {os.path.join(outdir, outfilename)}")


def batchconvert(source_dir, target_dir):
    for file in os.listdir(source_dir):
        if file.endswith('.woff2') or file.endswith('.woff'):
            convert(os.path.join(source_dir, file), target_dir)


def main(argv):
    if len(argv) == 1 or len(argv) > 3:
        print("""usage:

    python woff2otf.py [filename.woff/.woff2] [export filename:optional]

or, for batch conversion:

    python woff2otf.py [import directory path] [export directory path:optional]""")
        return

    if argv[1].endswith('.woff') or argv[1].endswith('.woff2'):
        if len(argv) == 3:
            target_dir_name = argv[2]
        else:
            target_dir_name = os.path.dirname(argv[1])
        convert(argv[1], target_dir_name)
    else:
        if len(argv) == 3:
            target_dir_name = argv[2]
        else:
            target_dir_name = argv[1] + '_otf'
        if not os.path.exists(target_dir_name):
            os.makedirs(target_dir_name)
        batchconvert(argv[1], target_dir_name)

    return 0

if __name__ == '__main__':
    sys.exit(main(sys.argv))
