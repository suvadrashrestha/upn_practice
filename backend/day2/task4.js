// Delete a file: https://www.geeksforgeeks.org/node-js/node-js-fs-unlink-method// Node.js program to demonstrate the

const fs = require("fs");

getFilesInDirectory();

fs.unlink("task1.txt", (err) => {
  if (err) console.log(err);
  else {
    console.log("\nDeleted file: task1.txt");

    getFilesInDirectory();
  }
});

function getFilesInDirectory() {
  console.log("\nFiles present in directory:");
  let files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    console.log(file);
  });
}
