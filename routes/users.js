var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("/user req info");
  console.dir(req.connection.remoteAddress);
  console.dir(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  console.dir(req.socket._peername);
  res.send('Your External IP :' + req.socket._peername.address + " : " + req.socket._peername.port + " :: " +req.socket._peername.family);
});

module.exports = router;
