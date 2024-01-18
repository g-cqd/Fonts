const fs = require('fs');

const url = `https://place.an.url/here`;

const foundry = '';

const fontNames = [
    '',
];

const weights = [
    '',
    'Fine',
    'Hairline',
    'Thin',
    'Ultralight',
    'UltraLight',
    'Extralight',
    'ExtraLight',
    'Light',
    'Regular',
    'Book',
    'Medium',
    'Semibold',
    'SemiBold',
    'Bold',
    'Extrabold',
    'ExtraBold',
    'Ultrabold',
    'UltraBold',
    'Dark',
    'Black',
    'Heavy'
];

const widths = [
    '',
    'Casual',
    'CasualText',
    'CompactText',
    'Condensed',
    'Compressed',
    'Slim',
    'Narrow',
    'SuperCondensed',
    'Supercondensed',
    'SemiCondensed',
    'Semicondensed',
    'Spatial',
    'SpatialText',
    'Compact',
    'Tall',
    'Tight',
    'Wide',
    'WideText',
    'SemiExtended',
    'Semiextended',
    'Extended',
    'Grand',
    'Text',
];

const extensions = [
    'ttf',
    'otf',
    'woff',
    'woff2'
];

const orientations = [
    '',
    'Italic',
    'Slanted',
    'Display'
];

async function download() {
    const count = fontNames.length *
    extensions.length *
    widths.length * (
        weights.length *
        orientations.length +
        1
        );
    let tested = 0;
    console.log(`Trials planned: ${count}`);
    let wrote = false;
    for (const fontName of fontNames) {
        Promise.all(extensions.map( async extension => {
            for (const width of widths) {
                for (const weight of weights) {
                    for (const orientation of orientations) {
                        let suffix = `${width}${weight}${orientation}`;
                        suffix.length > 0 && (suffix = `-${suffix}`);
                        const file = await fetch(`${url}${foundry}${fontName}${suffix}.${extension}`);
                        tested += 1;
                        if (file.status !== 200) {
                            continue;
                        }
                        const buffer = Buffer.from(await file.arrayBuffer());
                        if (buffer.toString('utf8').length < 3000) {
                            continue;
                        }
                        fs.appendFileSync(`./${foundry}${fontName}${suffix}.${extension}`, buffer);
                        await new Promise( resolve => setTimeout( resolve, Math.floor( Math.random() * 10 ) ) );
                    }
                }
                const file = await fetch(`${url}${foundry}${fontName}-${width}Variable.${extension}`);
                tested += 1;
                const printString = ((tested / count) * 100).toFixed(2) + '%';
                if (wrote) {
                    process.stdout.clearLine();
                    process.stdout.cursorTo(0);
                    process.stdout.write(printString);
                } else {
                    wrote = true;
                    process.stdout.write(printString);
                }
                if (file.status !== 200) {
                    continue;
                }
                const buffer = Buffer.from(await file.arrayBuffer());
                if (buffer.toString('utf8').length < 3000) {
                    continue;
                }
                fs.appendFileSync(`./${foundry}${fontName}-${width}Variable.${extension}`, buffer);
                await new Promise( resolve => setTimeout( resolve, Math.floor( Math.random() * 10 ) ) );
            }
        }))
    }
}

download();
