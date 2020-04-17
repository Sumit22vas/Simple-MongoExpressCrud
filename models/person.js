const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
});

// Passing the third argument to force exact collection name in database
const Person =  mongoose.model('Person',personSchema ,'person');

module.exports = Person;