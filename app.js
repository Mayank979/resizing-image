const Jimp = require("jimp");
const inputPath = "/Users/yadav/Desktop/GOT/";
const outputPath = "/Users/yadav/Desktop/resized/";
const fs = require("fs");


fs.readdir(inputPath, (err, files) => {
  if(err) throw err;
  files.forEach(file => {
    file_name = inputPath + file;
    Jimp.read(file_name, (err, foundImg) => {
      if(err) throw err;
      foundImg.resize(600, 600);
      foundImg.write(outputPath + file, (err) => {
        if(err) throw err;
      })
    })
  })
})
