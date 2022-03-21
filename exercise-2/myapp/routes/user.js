var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true}))



router.post('/', function(req, res, next) {
  console.log(`First Name: ${req.body.firstName}`)
  console.log(`Last Name: ${req.body.firstName}`)
  res.send('POST received');
});

module.exports = router;
