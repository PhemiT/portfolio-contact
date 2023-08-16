var Contact = require('../models/contact')


  const updateContact = async(req, res, next) => {
    try {
        const updateContact = await Contact.findByIdAndUpdate(
            { _id: req.body.id},
            { 
                name: req.body.name,
                number: req.body.number,
                email: req.body.email 
            }
        )
        res.redirect('/contact-list')
    } catch (error) {
        throw error
    }
}

module.exports = updateContact