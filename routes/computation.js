var express = require('express');
var router = express.Router();
var maths;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    maths=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(maths == 0)
      maths=Math.random()
    
    res.write('Math.random applied to '+maths+" is "+Math.random(maths)+"\n");
    res.end('Math.round applied to '+maths+" is "+Math.round(maths));
 });

module.exports = router;