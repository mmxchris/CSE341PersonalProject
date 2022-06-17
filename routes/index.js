const express = require('express');
const { route } = require('./meatSurvey');
const routes = require('express').Router();
const {ensureAuth} = require('../middleware/auth');

routes.use('/meatDepartment',ensureAuth, require('./meatSurvey'));
routes.use('/produceDepartment', ensureAuth, require('./produceSurvey'));
routes.get('/', (req, res) => {
    res.send('Home');
  });

module.exports = routes;