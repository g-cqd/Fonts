const fs = require('fs');
const opentype = require('opentype.js');

function extractFontName(fontData) {
  const font = opentype.parse(fontData);
  return font.names.fullName.en || font.names.fullName;
}

function saveFontFiles(harFilePath) {
  const harData = fs.readFileSync(harFilePath, 'utf8');
  const har = JSON.parse(harData);

  const fontEntries = har.log.entries.filter((entry) =>
    entry.response.content.mimeType === 'application/octet-stream' && entry.request.url.includes('woff')
  );

  for (const entry of fontEntries) {
    const { request: { url }, response } = entry;
    const fontData = response.content.text;
    if (fontData) {
      const fontFileName = url.substring(url.lastIndexOf('/') + 1);
      fs.writeFileSync(fontFileName, fontData, 'base64');
      const fontName = fs.readFileSync(fontFileName);
      console.log(`Saved ${fontFileName} ${fontName}`);
    }
  }
  console.log('Font files saved successfully.');
}

const harFilePath = '../network-logs.har';
saveFontFiles(harFilePath);
