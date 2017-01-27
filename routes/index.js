var express = require('express');
var router = express.Router();
var db = require('../models');
var user = db.User;
var faker = require('faker')
// var Highcharts = require('../public/javascripts/highcharts.js')('../public/javascripts/highcharts-more.js')('../public/javascripts/exporting.js')
var ocean = require('../public/javascripts/ocean.js');
var dummy = require('../public/javascripts/dummy.js');
var chart = require('../public/javascripts/chart.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Checker' });
});

router.post('/register', function(req, res, next) {
  let username = req.body.name
  let pass = req.body.password
  let birthdate = new Date(req.body.date)
  // user.addUser(username, pass, birthdate)
  let quiz = dummy
  res.render('register', {user: username, pass: pass, quiz:quiz});
});

router.post('/main', function(req, res, next) {
  let result = []
  for (let i = 0; i < 5; i++){
    let set = []
    for (let j = 0; j < 2; j++){
    set.push(Math.floor(Math.random()*(10-3)+3))
    }
    result.push(set.join(""))
  }
  let name = req.body.user
  // user.updateUserOCEAN(name, result.join(""))
  res.render('main', {result: result});
});

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
    // user.deleteUser(action[1])
    res.redirect('/main2')
  } if (action[0] == 'details'){
    res.send('grafik individual')
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
  // user.updateMost(id, name, pass, pref)
  res.redirect('main2')
})

router.get('/chart', function(req, res, next){
  let dataset = {
    chart: {
      polar: true,
      type: 'line'
    },
    title: {
      text: 'Your Name',
      x: -80
    },
    pane: {
      size: '100%',
    },
    xAxis: {
      categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Aggreableness',
        'Neuroticism'],
      tickmarkPlacement: 'on',
      lineWidth: 0,
      ceiling: 250,
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      tickAmount: 4,
      ceiling: 100,
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 70,
      layout: 'vertical'
    },
    series: [{
      name: 'You',
      data: [74, 49, 96, 55, 54],
      pointPlacement: 'on'
    }, {
      name: 'People Around You',
      data: [45, 58, 77, 82, 43],
      pointPlacement: 'on'
    }]
  }
  res.render('partials/test', {data: dataset})
})
router.get("*", function(req, res, next){
  res.render('index')
})

module.exports = router;
