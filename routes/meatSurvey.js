const express = require('express');
const routes = express.Router();

const meatSurveyController = require('../controller/meatSurveyController');

routes.post('/', meatSurveyController.createMeatSurvey)

routes.get('/', meatSurveyController.getAll);
routes.get('/:id',meatSurveyController.findById);
routes.get('/surveyNum/:surveyNum', meatSurveyController.findBySurveyNumber);
routes.get('/week/:week', meatSurveyController.findByWeek)
routes.get('/itemName/:itemName', meatSurveyController.findByItemName);

routes.put('/update/:id', meatSurveyController.updateSurvey);

routes.delete('/delete/:id', meatSurveyController.deleteSurvey);

module.exports = routes;