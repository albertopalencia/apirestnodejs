require('./config/config');

const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(require('./routes/usuario'))


mongoose.connect(process.env.URLDB, { useCreateIndex:true, useNewUrlParser: true }
    ,(err, res) => {
    if (err) throw err;

    console.log(`base de datos online variable ${process.env.URLDB}`);
    
});

app.listen(process.env.PORT, ()=> {
    console.log(`esta corriendo la app ${process.env.PORT}`);
    
});