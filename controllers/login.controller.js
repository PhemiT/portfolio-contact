var User = require('../models/user')

module.exports = (req, res, next) => {
    User.findOne({
      username: req.body.username,
      password: req.body.password
    }).then(
      (user) => {
        if (!user) {
          res.render('index', { title: 'Login', error: 'Login details incorrect'})
        } else {
            var session=req.session;
            session.userid=req.body.username;
           res.redirect('/contact-list')
        }
      }
    )
  }