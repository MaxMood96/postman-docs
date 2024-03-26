const fs = require('fs');
const path = require('path');

const filePath = "/docs/example.txt";

test('codex-v1.json exists and is valid JSON', () => {
    const filePath = path.join(__dirname, 'codex-v1.json');
    expect(fs.existsSync(filePath)).toBe(true);

    const fileContents = fs.readFileSync(filePath, 'utf8');
    expect(() => JSON.parse(fileContents)).not.toThrow();
});

test('filePath starts with "/docs/"', () => {
    expect(filePath.startsWith('/docs/')).toBe(true);
  });