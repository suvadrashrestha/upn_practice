const fs = require('fs');

// Create a buffer
const buf = Buffer.alloc(1024); 

// Opening file
fs.open('task1.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }

    // Reading file
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }

        // Truncating the file
        fs.ftruncate(fd, 15, function (err) { 
            if (err) {
                console.log(err);
            }

            // Content after truncating
            console.log("New content of file");
            fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
                if (err) {
                    console.log(err);
                }

                if (bytes > 0) {
                    console.log(buf.slice(0, bytes).toString());
                }

                // Close the opened file
                fs.close(fd, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        });
    });
});
