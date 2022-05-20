const express = require('express');
const routes = express.Router();

const produceSurveyController = require('../controller/produceSurveyController');

routes.post('/', produceSurveyController.createProduceSurvey)

routes.get('/', produceSurveyController.getAll);
routes.get('/:id',produceSurveyController.findById);
routes.get('/surveyNum/:surveyNum', produceSurveyController.findBySurveyNumber);
routes.get('/week/:week', produceSurveyController.findByWeek)
routes.get('/itemName/:itemName', produceSurveyController.findByItemName);

routes.put('/update/:id', produceSurveyController.updateSurvey);

routes.delete('/delete/:id', produceSurveyController.deleteSurvey);

module.exports = routes;