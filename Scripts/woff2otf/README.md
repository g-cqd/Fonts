# woff2otf - Fork by g-cqd
Convert woff and woff2 files to otf
### Dependencies
#### Brotli

    $ pip install brotli
#### FontTools
    $ pip install fonttools
### Usage
for a single .woff or .woff2 file:

    python woff2otf.py [filename.woff/.woff2] [export filename:optional]
for batch conversion, folder of .woff/.woff2 files

    python woff2otf.py [import directory path] [export directory path:optional]
