const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname,'/public')))

app.get ('/', (req, res, next) => {
    var duongDanFile = path.join(__dirname, './home.html')
    res.sendFile(duongDanFile);
})

app.listen(process.env.PORT, () => {
    console.log('Server is starting');
})