var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("/user req info");
  // console.dir(req.connection.remoteAddress);
  // console.dir(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  // console.dir(req.socket._peername);
  console.dir(req);
  res.send('Peer DATA=/IP:' + req.socket._peername.address + "/PORT:" + req.socket._peername.port + "/FAM:" +req.socket._peername.family);
  
});

module.exports = router;
