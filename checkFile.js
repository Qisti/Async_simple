const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  console.log(`File or folder name: ${line}`);

  fs.open(line, 'r', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('file or folder does not exist');
      }
    } else {
      console.log("file exist");
    } 
  });
  
  rl.close();
});

console.log("input folder name or file name");
