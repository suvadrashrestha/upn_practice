
let fs = require('fs'),


reader = fs.createReadStream('example.txt', {
    flag: 'a+',
    encoding: 'UTF-8',
    start: 5,
    end: 64,
    highWaterMark: 16
});

reader.on('data', function (chunk) {
    console.log(chunk);
});