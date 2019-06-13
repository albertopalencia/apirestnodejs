require('./config/config');

const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());


app.get('/',(req, res)=> {
    res.json('Bienvenido Api rest con nodejs');
});


app.get('/usuario',(req, res)=> {
    res.json('get usuario');
});

app.post('/usuario',(req, res)=> {
    res.json('post usuario');
});

app.put('/usuario',(req, res)=> {
    res.json('put usuario');
});

app.delete('/usuario',(req, res)=> {
    res.json('delete usuario');
});

app.listen(process.env.PORT, ()=> {
console.log(`esta corriendo la app ${process.env.PORT}`);
});