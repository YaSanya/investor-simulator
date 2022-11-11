const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/', (req, res) => {
    res.send('OK');
})

app.get('/rate', (req, res) => {
    fs.readFile('usd.txt', 'utf8', (err, rate) => {
        res.send({rate});
    });
});

// I don't know difference between str(4000) and num(4000)

app.listen(4000, () => {
    console.log('Server is running on port 4000')
});