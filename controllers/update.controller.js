var Contact = require('../models/contact')

module.exports = function(req, res, next) {
    var contacts = Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            console.log(err)
        } else {
            res.render('index', { title: 'Update', contact: contact, id: req.params.id })
        }
    })
    
  }