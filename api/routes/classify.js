var express = require('express');
var router = express.Router();
let {getClassify,getCustom,addClassify} = require("./classify-api")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getClassify',getClassify);
router.get('/getCustom',getCustom);
router.post('/addClassify',addClassify);

module.exports = router;