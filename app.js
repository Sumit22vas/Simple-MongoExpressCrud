const express = require('express');
const mongoose =  require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser : true , useUnifiedTopology : true});

db = mongoose.connection;

//check if connected 

db.once('open',()=>{
    console.log('connected to database');
});

//if db connection error
db.on('error',(err)=>{
    console.log(err);
});


//importing models

const Person = require('./models/person');


// Create Operation////////////////////////////////////////////////////////////

// const Person1 = new Person({
//     name : 'John Doe',
//     email : 'johnDoe@gmail.com', 
//     age : 21
// });

// Person1.save().then((result) => {
//         console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// Create Operation End //////////////////////////////////////////////////

// Read Operation ////////////////////////////////////////////////////////
 
// Person.find()
// .then((result) => {
//     console.log(result) ; //Printing Data In console
// }).catch((err) => {
//     console.log(err);
// });

// Read Operation End //////////////////////////////////
// Update Operation //////////////////////////////

// Person.updateOne({name : "John Doe"},{
//     $set : {
//         email : "johndoe101@gmail.com"
//     }
// })
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//    console.log(err); 
// });

// Update Operation End //////////////////////////////


// DeleteOperation //////////////////////

// Person.deleteOne({name : "John Doe"})
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// DeleteOperation End//////////////////////


//assigning port numbeer  and listening to port to create server
const portnum = process.env.port || 3000;
app.listen(portnum,()=>{
    console.log(`server is running at port : ${portnum}`);
});