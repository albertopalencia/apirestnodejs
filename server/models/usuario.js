const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values:["USER_ROLE", "ADMIN_ROLE"],
    message: '{VALUE} rol no es valido'
};


let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true,'el nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true,'el apellido es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'el correo es obligatorio'],
        unique:true
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
        default: "USER_ROLE",
        enum: rolesValidos
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

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let usuarioObject = user.toObject();
    delete usuarioObject.password;
    return usuarioObject;
}

usuarioSchema.plugin(uniqueValidator, {message: '{PATH}  es obligatorio' });

module.exports = mongoose.model('Usuario', usuarioSchema);
