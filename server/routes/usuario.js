const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const _ = require('underscore');

// modelo de la base de datos
const Usuario = require('../models/usuario');



app.get('/usuario',(req, res)=> {    
  
 
    Usuario.find({estado:true}, 'nombre apellido edad email img estado google')    
    .exec( (err, usuarioDB) => { 
        if (err) {
            return res.json( { 
                ok:false,
               err
            });
        }

        Usuario.countDocuments({estado:true}, (err,conteo)=> {
            if (err) {
                return res.json( { 
                    ok:false,
                    err
                });
            }

            return res.json( {
                ok:true,
                usuarios: usuarioDB,
                total: conteo
            });
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

app.delete('/usuario/:id',(req, res) => {

    let id = req.params.id;      

    Usuario.findByIdAndUpdate(id, { new: true, estado:false, }, (err, usuarioDB) => {
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
