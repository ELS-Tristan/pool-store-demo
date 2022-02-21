const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    email: String,
    password : String,
    token:String
    
});

module.exports = model('user', userSchema);