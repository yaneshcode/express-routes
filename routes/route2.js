var express = require('express');
var router = express.Router();

/* GET  page. */
router.get('/', function(req, res, next) {
  res.render('route2', { title: 'Route 2' });
});

module.exports = router;
