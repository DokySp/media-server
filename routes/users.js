var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/:num', function(req, res, next) {
  var imgSrc = "img"+req.params.num+".jpg"
  console.log("GET : "+imgSrc);
  // console.dir(req.connection.remoteAddress);
  // console.dir(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  // console.dir(req.socket._peername);
  // console.dir(req);
  // res.send('Peer DATA=/IP:' + req.socket._peername.address + "/PORT:" + req.socket._peername.port + "/FAM:" +req.socket._peername.family);
  
  res.send('<img src="/stream/'+imgSrc+'"><SCRIPT language="JavaScript">setTimeout("history.go(0);", 1);</SCRIPT>');
});

router.post('/:num', function(req, res) {
  var imgSrc = "img"+req.params.num+".jpg"
  var imagedata = ''
  req.setEncoding('binary')
  var tt = 0
  
  // console.log(req.headers)
  req.on('data', (chunk) => {
    imagedata += chunk
  });

  req.on('end', function(){
    fs.writeFile('./public/stream/'+imgSrc, imagedata, 'binary', function(err){
      if (err) throw err
        // console.log('File saved.')
    })
  });
  res.send("{'result':'ok'}");
});

module.exports = router;



