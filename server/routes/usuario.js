const express = require('express');

const app = express();

const Usuario = require('../models/usuario');



app.get('/usuario',(req, res)=> {
    
    Usuario.find({ estado: true }, (err, usuarioDB) => {
        if (err) {
            return res.json( { 
                ok:false,
               err
            });
        }

        return res.json( {
            ok:true,
            usuarios: usuarioDB
        });
    });
});


module.exports = app;