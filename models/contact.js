const mongoose = require("mongoose");
 
var contactSchema = new mongoose.Schema({
            name: String,
            number: String,
            email: String
        });
 
module.exports = mongoose.model('contacts', contactSchema);
