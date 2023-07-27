import brotli
from fontTools.ttLib import woff2,TTFont
import os
import sys

def convert(infilename):
    with open(infilename , mode='rb') as infile:
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
        with open(outfilename, mode='wb') as outfile:
            woff2.decompress(infile, outfile)

    return 0

def batchconvert(source_dir):
    for file in os.listdir(source_dir):
        if file.endswith('.woff2') or file.endswith('.woff'):
            convert(source_dir + '/' + file)
    
    return 0


def main(argv):
    if len(argv) == 1 or len(argv) > 3:
        print("""usage:

    python woff2otf.py [filename.woff/.woff2] [export filename:optional]

or, for batch conversion:

    python woff2otf.py [import directory path] [export directory path:optional]""")
        return

    if argv[1].endswith('.woff') or argv[1].endswith('.woff2'):
        if len(argv) == 3:
            target_file_name = argv[2]
        else:
            target_file_name = argv[1].rsplit('.', 1)[0] + '.otf'
        convert(argv[1])
    else:
        if len(argv) == 3:
            target_dir_name = argv[2]
        else:
            target_dir_name = argv[1] + '_otf'
        if not os.path.exists(target_dir_name):
            os.makedirs(target_dir_name)
        batchconvert(argv[1])
    
    return 0

if __name__ == '__main__':
    sys.exit(main(sys.argv))
