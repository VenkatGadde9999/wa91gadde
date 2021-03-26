var express = require('express');
var router = express.Router();
var k= 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  k += 1 ;
  res.send(`users accesses are: ${k}`);
});

module.exports = router;
