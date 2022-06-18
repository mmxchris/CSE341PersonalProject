const express = require('express');
const { route } = require('./meatSurvey');
const routes = require('express').Router();
const verifyToken = require ('../helper/verfiyToken')

routes.use('/meatDepartment', verifyToken.auth, require('./meatSurvey'));
routes.use('/produceDepartment', verifyToken.auth, require('./produceSurvey'));
routes.use('/user', require('./user'));
routes.get('/', (req, res) => {
    res.send('Home');
  });

module.exports = routes;