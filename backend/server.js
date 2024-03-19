const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("This is the Home Page");
});

app.get('/notes', function(req, res){
    res.send('This is notes page');
});

app.listen('3000', ()=>{
    console.log("Server running at PORT: 3000");
});