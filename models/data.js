const mongoose = require('mongoose');

let Schema = mongoose.Schema;


let textSchema = new Schema({
    text: {
        type: String,
        required: [true, 'El campo es necesario']
    },
   
});


// usuarioSchema.methods.toJSON = function() {

//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.password;

//     return userObject;
// }





module.exports = mongoose.model('data', textSchema);