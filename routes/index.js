var express = require('express');
var router = express.Router();
var db = require('../models')
var faker = require('faker')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Checker' });
});
router.get('/register', function(req, res, next) {
  let user = req.query.name
  let pass = req.query.password
  res.render('register', {user: user, pass: pass});
});
router.get('/main', function(req, res, next) {
  let answer = req.query.group1
  res.render('main', {answer: answer});
});

module.exports = router;
