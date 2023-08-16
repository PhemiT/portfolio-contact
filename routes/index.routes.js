var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contact.controller')
var deleteController = require('../controllers/delete.controller')
var updateController = require('../controllers/update.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' })
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' })
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' })
});

/* GET services page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' })
});

/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', error: '' })
});

/* GET contact list page */
router.get('/contact-list', contactController);

/* GET update page */
router.get('/update/(:id)', updateController);

/* DELETE contact */
router.get('/delete/(:id)', deleteController)

module.exports = router;
