var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  res.redirect('/catalog');
});

module.exports = router;
