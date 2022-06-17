const routes = require('express').Router();
const register = require('../controller/Register');
const login = require('../controller/Login');

routes.post('/register', register.registerUser);
routes.post('/login', login.logInUser);


module.exports = routes;