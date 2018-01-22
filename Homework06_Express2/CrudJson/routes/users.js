var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/grades').post(function (req, res) {
    var g = new Grade
})

module.exports = router;
