var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("/user req info");
  console.dir(req.connection.remoteAddress);
  console.dir(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  console.dir(req.socket._peername);
  res.send('respond with a resource');
});

module.exports = router;
