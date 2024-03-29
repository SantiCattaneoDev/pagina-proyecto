const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/index.html'));
});

app.listen(port, () =>{
    console.log(`APP Runing in 3000 port!`)
});