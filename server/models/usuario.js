const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true,'el nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'el correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'la contrasena es obligatoria']
    },
    img: { 
        type: String        
    },
    role: {
        type:String,         
        default: "USER_ROLE"
    },
    estado: { 
        type: Boolean,
        default: true  
    },
    google: { 
        type: Boolean,
        default: false  
    }
});


module.exports = mongoose.model('Usuario', usuarioSchema);
