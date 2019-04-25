var express = require('express');
var router = express.Router();
let {getBill,removeBill,addBill} = require("./index-api")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getBill',getBill);
router.get('/removeBill',removeBill);
router.post('/addBill',addBill);


module.exports = router;
