const mongoose = require("mongoose");
 
var userSchema = new mongoose.Schema({
            username: String,
            password: String
        });
 
module.exports = mongoose.model('users', userSchema);
