const express = require('express');
const { route } = require('./meatSurvey');
const routes = require('express').Router();

routes.use('/meatDepartment', require('./meatSurvey'));
routes.use('/produceDepartment', require('./produceSurvey'));
routes.get('/', (req, res) => {
    res.send('Home');
  });

module.exports = routes;