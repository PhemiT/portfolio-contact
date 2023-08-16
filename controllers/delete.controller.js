var Contact = require('../models/contact')

module.exports = function(req, res, next) {
    Contact.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/contact-list');
        } else {
            console.log('Failed to Delete Contact: ' + err);
        }
    });
  }