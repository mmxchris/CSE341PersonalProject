const express = require('express');
const routes = express.Router();

const meatSurveyController = require('../controller/meatSurveyController');
const validation = require('../middleware/validate');

routes.post('/', validation.saveSurvey, meatSurveyController.createMeatSurvey);
routes.get('/', meatSurveyController.getAll);
routes.get('/:id',meatSurveyController.findById);
routes.get('/surveyNum/:surveyNum', meatSurveyController.findBySurveyNumber);
routes.get('/week/:week', meatSurveyController.findByWeek)
routes.get('/itemName/:itemName', meatSurveyController.findByItemName);

routes.put('/update/:id', validation.saveSurvey, meatSurveyController.updateSurvey);

routes.delete('/delete/:id', meatSurveyController.deleteSurvey);

module.exports = routes;