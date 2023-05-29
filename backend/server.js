const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './tmp/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

const PORT = process.env.PORT || 8080;

// app.use(
//     expressFileUpload({
//       useTempFiles: true,
//       tempFileDir: "./tmp/",
//     })
//   );

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(cors({
  origin: '*'
}));

app.post('/convert', upload.single('file'), function (req, res) {
  console.log(req.body);  
  const file = req.file;
  const to = req.body.data;
  let fileName = `output.${to}`;
  ffmpeg("./tmp/" + file.filename) // pointing ffmpeg to uploaded file in. /tmp folder.
    .withOutputFormat(to)     // telling ffmpeg what format we want to convert to.
    .on("error", function (err) {  
      console.log("an error happened: " + err.message);
      fs.unlink("./tmp/" + file.filename, function (err) { // if error, uploaded file is deleted.
        if (err) throw err;
        console.log("3. Original File deleted");
      });
    })
    .saveToFile(fileName) // saving converted file by giving it a file name defined in the fileName variable earlier.
    .on("end", function (stdout, stderr) {
      console.log("Finished");
      console.log(res);
      res.download(fileName, function (err) { // sending converted file back to client side on success.
        if (err) throw err;

        fs.unlink(fileName, function (err) { // delete converted file on success.
          if (err) throw err;
          console.log("1. Coverted File deleted");
        });
      });
      fs.unlink("./tmp/" + file.filename, function (err) { // delete origanl file as well on success.
        if (err) throw err;
        console.log("2. Original File deleted");
      });
    })})

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

