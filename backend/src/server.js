const express = require('express');
const app = express();
const Note = require('./models/Note');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Samitti:Sam1984@cluster0.u6jymdm.mongodb.net/notesdb').then(function(){
    app.get('/', function(req, res){
        res.send("This is the Home Page");
    });
    
    app.get('/notes/list/:userid',async function(req, res){
        var notes = await Note.find({userid: req.params.userid});
        res.json(notes);
    });

    app.post('/notes/add',async function(req, res){
        
        var newNote = new Note({
            id:req.body.id,
            userid:req.body.userid,
            title:req.body.title,
            content:req.body.content,
        });
        
        await newNote.save();
        const response = {
            message: `New Note Created with id: ${req.body.id}`,
        };
        
        res.json(response);
    });

    app.put('/notes/update/',async function(req, res){
        var updateNote = await Note.findOneAndUpdate(
                {id: req.body.id}, // Condition
                {
                    title: req.body.title,
                    content: req.body.content,
                },      
                {new: true}, // Return the updated data
            );

        const response = {
            message: `Note with id: ${req.body.id} updated successfully`,
            note: updateNote,
        };
        res.json(response);
    });
});

app.listen('3000', ()=>{
    console.log("Server running at PORT: 3000");
});