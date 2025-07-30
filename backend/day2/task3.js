// Append to a file: https://www.geeksforgeeks.org/node-js/node-js-fs-appendfile-function/
// Node.js program to demonstrate the 
// fs.appendFile() method 

// Import the filesystem module 
const fs = require('fs');

// Get the file contents before the append operation 
console.log("\nFile Contents of file before append:",
    fs.readFileSync("task1.txt", "utf8"));

fs.appendFile("task1.txt", " - GeeksForGeeks",
    { encoding: "latin1", mode: 0o666, flag: "a" },
    (err) => {
        if (err) {
            console.log(err);
        }
        else {
            // Get the file contents after the append operation 
            console.log("\nFile Contents of file after append:",
                fs.readFileSync("task1.txt", "utf8"));
        }
    });