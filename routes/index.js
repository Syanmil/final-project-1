var express = require('express');
var router = express.Router();
var db = require('../models')
var faker = require('faker')
var ocean = require('../public/javascripts/ocean.js')
var dummy = require('../public/javascripts/dummy.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Checker' });
});
router.post('/register', function(req, res, next) {
  let user = req.body.name
  let pass = req.body.password
  // db.User.addUser(user, pass)
  let quiz = dummy
  res.render('register', {user: user, pass: pass, quiz:quiz});
});
router.post('/main', function(req, res, next) {
let result = []
  for (let i = 0; i < 10; i++){
    result.push(Math.floor(Math.random()*(10-3)+3))
  }
  res.render('main', {result: result.join("")});
});

router.get("*", function(req, res, next){
  res.render('index')
})

module.exports = router;
