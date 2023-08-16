var Contact = require('../models/contact')

module.exports = function(req, res, next) {
    var session = req.session
    if (session.userid) {
        var contacts = Contact.find({}, (err, contacts) => {
            if (err) {
                console.log(err)
            } else {
                //sort contact alphabetically
                const sortedContacts = contacts.sort((a, b) =>
                    a.name.localeCompare(b.name))
                res.render('index', { title: 'Business Contacts List', contacts: sortedContacts })
            }
        })
    } else {
        res.redirect('/login')
    }
  }