require('./config/config');

const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(require('./routes/usuario'))


mongoose.connect('mongodb+srv://dara:vrUG28LsHvTvvQTo@cluster0-ymjpg.mongodb.net/cafe', 
    {useCreateIndex:true, useNewUrlParser: true }
    ,(err, res) => {
    if (err) throw err;

    console.log('Base de datos online!');
});

app.listen(process.env.PORT, ()=> {
    console.log(`esta corriendo la app ${process.env.PORT}`);
});