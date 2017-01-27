var express = require('express');
var router = express.Router();
var db = require('../models');
var user = db.User;
var faker = require('faker')
var getAge = require('get-age')
var ocean = require('../public/javascripts/ocean.js');
var dummy = require('../public/javascripts/dummy.js');
var radardata = require('../public/javascripts/radardata.js');
var bubbledata = require('../public/javascripts/bubbledata.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Checker', info: "" });
});

router.post('/register', function(req, res, next) {
  let username = req.body.name
  let pass = req.body.password
  let birthdate = new Date(req.body.date)
  let quiz = dummy
  if (req.body.quiz == 'ocean'){
    quiz = ocean
  }
  user.findOrCreate({where: {name: username}, defaults: {role: 'free', password: pass, birthdate: birthdate}}).spread(function(user, created) {
    console.log(user.get({
      plain: true
    }))
    if(!created){
      res.render('index', {title: 'The Checker', info: "username telah terdaftar"})
    }
    res.render('register', {user: user.dataValues.name, quiz:quiz});
  })
});

router.post('/main', function(req, res, next) {
  let result = []
  for (let i = 0; i < 5; i++){
    let set = []
    for (let j = 0; j < 2; j++){
    set.push(Math.floor(Math.random()*(10-3)+3))
    }
    result.push(Number(set.join("")))
  }
  console.log(req.body.user);
  let name = req.body.user
  user.updateUserOCEAN(name, result.join(""))
  radardata.title.text = name
  radardata.series[0].data = result
  res.render('main', {data: radardata});
});

router.get('/compare', function(req, res, next){
  user.findAll().then(function(data){
    data.forEach(function(user){
      if (user.ocean == null){
      } else {
        let mydata = user.ocean.match(/\d{2}/g)
        let xydata = {
          x: +mydata[2],
          y: +mydata[0],
          z: 25,
          name: user.name
        }
        bubbledata.series[0].data.push(xydata)
      }
    })
    res.render('compare', {data: bubbledata})
  })
})

router.get('/main2', function(req, res, next) {
  let listed = []
  user.findAll({
    order: [['id', 'ASC']]
  }).then(function (user) {
    res.render('main2', { listed: user });
  })
});

router.post('/update', function(req, res, next){
  let action = req.body['action'].split(" ")
  if (action[0] == 'delete'){
    user.deleteUser(action[1])
    res.redirect('/main2')
  } if (action[0] == 'details'){
    user.findById(action[1]).then(function(user){
      let mydata = user.ocean.match(/\d{2}/g)
      mydata = mydata.map(function(data){
        return Number(data)
      })
      radardata.series[0].data = mydata
      radardata.title.text = user.name
      res.render('individual', {data: radardata})
    })
  } else {
    user.findById(action[1]).then(function(val){
      res.render('updatepage', {data : val})
    })
  }
})

router.post('/updated', function(req, res, next){
  let id = req.body.id
  let name = req.body.name
  let pass = req.body.password
  let pref = req.body.preference
  user.updateMost(id, name, pass, pref)
  res.redirect('/main2')
})

router.get("*", function(req, res, next){
  res.render('index')
})

module.exports = router;
