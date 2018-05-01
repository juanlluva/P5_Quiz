var express = require('express');
var router = express.Router();


const quizCtrl = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

router.get('/quizzes', function(req, res, next) {
  quizCtrl.index(req,res,next);
});

module.exports = router;
