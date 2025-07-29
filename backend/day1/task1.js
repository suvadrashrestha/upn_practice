// Read about fs module and use it to read files synchronously and asynchronously (https://nodejs.org/api/fs.html)

const fs = require('fs');
const path = 'example.txt';

fs.writeFileSync('example.txt', 'This is a sample text.\nUsed for both sync and async reading.');

console.log('\n Reading file synchronously...');
try {
  const dataSync = fs.readFileSync(path, 'utf8');
  console.log('Sync File Content:\n', dataSync);
} catch (err) {
  console.error(' Error (Sync):', err);
}


console.log('\n Reading file asynchronously...');
fs.readFile(path, 'utf8', (err, dataAsync) => {
  if (err) {
    console.error(' Error (Async):', err);
    return;
  }
  console.log('Async File Content:\n', dataAsync);
});

console.log('\n Script execution continues after async read...');
