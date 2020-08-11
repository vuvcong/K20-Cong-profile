const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const Account_Model = require('./models/account');
const PAGE_SIZE = 2;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/user', (req, res, next) => {
    var page = req.query.page;
    if (page) {
        page = parseInt(page)
        if (page < 1) {
            page = 1
        }
        var soLuongBoQua = (page - 1) * PAGE_SIZE
        Account_Model.find({})
            .skip(soLuongBoQua)
            .limit(PAGE_SIZE)
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json('Error');
            })
    } else {
        Account_Model.find({
        })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json('Error');
            })
    }
})

app.listen(3000);