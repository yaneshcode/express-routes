var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {
  res.render('route1', { title: 'ROUTE 1' });
});

module.exports = router;
