require('dotenv/config');
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3001);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/api/area', (req, res) => {
    const { timeSpan, date } = req;
    res.json({
        timeSpan,
        date
    });
})

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});





