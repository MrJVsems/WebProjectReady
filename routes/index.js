var express = require('express');
var router = express.Router();
const {Team} = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});
router.get('/visitor', function(req, res, next) {
  res.render('visitor', { title: 'Express' });
});
router.get('/TeamsMain', async function(req, res, next) {
  let teams = await Team.findAll();
  console.log(teams);
  res.render('TeamsMain', {title: 'Express' ,teams});
});
router.get('/TeamDetail', async function(req, res, next) {
  let teams = await Team.findAll();
  console.log(teams);
  res.render('TeamDetail', {title: 'Express', teams});
});
router.get('/AdminLogin', function(req, res, next) {
  res.render('AdminLogin', { title: 'Express' });
});
router.get('/evadmin', function(req, res, next) {
  res.render('EventAdminMenu', { title: 'Express' });
});
router.get('/mngmtch', function(req, res, next) {
  res.render('ManageMatchups', { title: 'Express' });
});
router.get('/nwmtch', function(req, res, next) {
  res.render('NewMatchup', { title: 'Express' });
});
module.exports = router;

