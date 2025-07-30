// Node.js program to demonstrate the
// fs.close() method

// Import the filesystem module
const fs = require("fs");

// Get the file descriptor of the given path
file_descriptor = fs.openSync("task1.txt");
console.log("The file descriptor is:", file_descriptor);

// Close the file descriptor
fs.close(file_descriptor, (err) => {
  if (err) console.error("Failed to close file", err);
  else {
    console.log("\n> File Closed successfully");
  }
});
