const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const app = express();
//folder
var folderPath = path.join(__dirname, "/uploads");


app.use(express.static(__dirname));
app.use('/favicon.ico', express.static('/favicon.ico'));
app.post('/submit', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, async function (err, field, files) {
        var data = { n: field.name, e:field.email, c: field.city, g:field.gender, d: field.dob, t: field.tob };
        //console.log(files.pic);
        fs.copyFile(files.pic.path, path.join(folderPath, files.pic.name), (err) => {
            if (err) return console.log(err);
            data.p = `/uploads/${files.pic.name}`;
            res.json(data);
            res.end();
        });
    });
});

app.listen(9592);
console.log("Web Server running on http://localhost:9592");
