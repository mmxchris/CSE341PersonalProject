const validator = require('../helper/validate');

const saveSurvey = (req, res, next) => {
  const validationRule = {
    surveyNum: 'required|string',
    week:'required|string',
    itemName:'required|string',
    salePrice:'required|numeric',
    firstDelivery: 'required|integer',
    secondDelivery: 'required|integer',
    thirdDelivery: 'required|integer',
    forthDelivery: 'required|integer',
    fifthDelivery: 'required|integer',
    amountRecived: 'required|integer',
    amountRemaining: 'required|integer',
    ranOut:'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
    saveSurvey
};