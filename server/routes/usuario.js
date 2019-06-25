const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const _ = require('underscore');

// modelo de la base de datos
const Usuario = require('../models/usuario');



app.get('/usuario',(req, res)=> {
    
    let desde = req.params.desde || 0;
    desde = Number(desde);
    let limite = req.params.limite || 5;
    limite = Number(limite);



    Usuario.find({ estado: true }, 'nombre apellido edad email img estado google', (err, usuarioDB) => {
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



app.post('/usuario',(req, res)=> {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
        role: body.role
    });
    
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.json({ 
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

app.put('/usuario/:id',(req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body,['nombre','apellido','email','img','edad']);
    

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.json({ 
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
