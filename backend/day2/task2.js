// Read from a file: https://www.geeksforgeeks.org/node-js/node-js-fs-readfile-method/

const fs= require('fs');

fs.readFile('task1.txt','utf8', (err, data)=>{
    if(err){
        console.log("The following error occured .\n", err)
        return;
    }
    console.log("File contents", data)
})