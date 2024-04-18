const express = require('express');
const app = express();
const Note = require('./models/Note');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Samitti:Sam1984@cluster0.u6jymdm.mongodb.net/notesdb').then(function(){
    app.get('/', function(req, res){
        res.json({
            message: "API is Working",
        });
    });   
    const noteRouter = require('./routes/Note');
    app.use('/notes', noteRouter);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server running at PORT: " + PORT);
});