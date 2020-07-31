'use strict';

const { Router } = require('express');
const router = Router();
const Routeguard = require('../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

router.get('/private', Routeguard, (req, res, next) => {
  res.render('authentication/private');
});


module.exports = router;