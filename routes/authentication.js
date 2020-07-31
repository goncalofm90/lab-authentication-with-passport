'use strict';

const { Router } = require('express');
const router = new Router();


const passport = require('passport');


router.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up');
});

router.post(
  '/sign-up',
  passport.authenticate('sign-up', {
    successRedirect: '/',
    failureRedirect: '/authentication/sign-up'
  })
);

router.get('/sign-in', (req, res, next) => {
  res.render('authentication/sign-in');
});

router.post(
  '/sign-in',
  passport.authenticate('sign-in', {
    successRedirect: '/private',
    failureRedirect: '/authentication/sign-in'
  })
);

router.post('/sign-out', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/student-dashboard', (req, res, next) => {
  res.render('student.hbs');
});

router.get('/assistant-dashboard', (req, res, next) => {
  res.render('assistant.hbs');
});

router.get('/teacher-dashboard', (req, res, next) => {
  res.render('teacher.hbs');
});

module.exports = router;