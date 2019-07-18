require('./config/config');

const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

// configuracion de rutas
app.use(require('./routes/index'))




mongoose.connect(process.env.URLDB, { useCreateIndex:true, useNewUrlParser: true }
    ,(err, res) => {
    if (err) throw err;
});

app.listen(process.env.PORT, ()=> {
    console.log(`esta corriendo la app ${process.env.PORT}`);    
});