var express = require('express');
var router = express.Router();

const controlador = require('../controladores/securityController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Seguridad' });
});

router.post('/',controlador.handlexml);

module.exports = router;
