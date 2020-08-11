const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/K20Nodemy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const Account_Schema = new Schema({
    username: String,
    password: String
}, {
    collection: 'Account'
});

const Account_Model = mongoose.model('Account', Account_Schema);

for (let i = 0; i < 20; i++) {
    Account_Model.create({ 
        username : 'nodemy_'+i, 
        password: '1234'
    })
}

module.exports = Account_Model;

