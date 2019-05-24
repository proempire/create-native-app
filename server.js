const fs = require('fs');
const path = require('path');
require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const csv = require('fast-csv');
const { connectDb, models } = require('./models/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3001);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});

app.get('/api/grid/:timeSpan/:date', async (req, res) => {
    const { timeSpan, date } = req.params;
    // res.json({
    //     timeSpan,
    //     date
    // });
    // abandon underscore format, directly concatenate date and timeSpan
    const grid = await req.context.models.Grid.findById(`${date}${timeSpan}`);
    // console.log(grid);
    res.json(grid);
})

const eraseDatabaseOnSync = true;
let num = 0;

connectDb().then(async () => {
    if (eraseDatabaseOnSync) {
        await models.Grid.deleteMany({});
        // await models.Road.deleteMany({});
    }

    readFiles('result/', 'Grid');
    // readFiles('roadResult1/', 'Road');

    app.listen(app.get('port'), () => {
        console.log(`Find the server at: http://localhost:${app.get('port')}/`);
    });
});

const readFile = function (dirname, filename, modelName) {
    // console.log(fileHeaders, modelName);
    const filePath = path.join(dirname, filename);
    const obj = new models[modelName]();
    obj.set('id', filename.replace(/-|_/g, '').split('.')[0]);
    obj.set('data', []);
    // console.log(filename);
    csv
        .fromPath(filePath, { headers: true })
        .on('data', function (data) {
            // console.log(data);
            const objData = {};

            Object.keys(data).forEach(function (key) {
                const val = data[key];

                if (val !== '')
                    objData[key] = val;
            });

            obj.data.push(objData);

            // console.log(objData);
        })
        .on('end', function () {
            obj.save(function (err) {
                if (err)
                    console.log(err);
            });

            num++;
            console.log(`${num} items read`);
            // console.log(obj);
        });
};

const readFiles = function (dirname, modelName, onError) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError && onError(err);
            return;
        }
        filenames.forEach(function (filename) {
            // fs.readFile(dirname + filename, 'utf-8', function (err, content) {
            //     if (err) {
            //         onError(err);
            //         return;
            //     }
            //     onFileContent(filename, content);
            // });
            if (/\.txt$/.test(filename)) {
                readFile(dirname, filename, modelName);
            }
        });
    });
};
