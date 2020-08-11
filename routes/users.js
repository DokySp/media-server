var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("/user req info");
  console.dir(res.connection.remoteAddress);
  console.dir(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  res.send('respond with a resource');
});

module.exports = router;
