'use strict';

const { Router } = require('express');
const router = Router();
const Routeguard = require('../middleware/route-guard');
const roleRouteGuard = require('./../middleware/role-route-guard');


router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

router.get('/private', Routeguard, (req, res, next) => {
  res.render('authentication/private');
});

router.get('/student-dashboard', roleRouteGuard('student','teacher', 'assistant'), (req, res, next) => {
  res.render('student.hbs');
});

router.get('/assistant-dashboard', roleRouteGuard(['teacher', 'assistant']),(req, res, next) => {
  res.render('assistant.hbs');
});

router.get('/teacher-dashboard', roleRouteGuard(['teacher']), (req, res, next) => {
  res.render('teacher.hbs');
});


module.exports = router;