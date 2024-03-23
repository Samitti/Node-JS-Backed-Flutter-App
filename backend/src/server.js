const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Samitti:Sam1984@cluster0.u6jymdm.mongodb.net/notesdb').then(function(){
    app.get('/', function(req, res){
        res.send("This is the Home Page");
    });
    
    app.get('/notes', function(req, res){
        res.send('This is notes page');
    });
});


app.listen('3000', ()=>{
    console.log("Server running at PORT: 3000");
});