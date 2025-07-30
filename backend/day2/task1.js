// Write to a file (if not exists create it): https://www.geeksforgeeks.org/node-js/node-js-fs-writefile-method/
const fs = require('fs');

const data = 'This is the data to be written in a file!';

fs.writeFile('task1.txt', data, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});