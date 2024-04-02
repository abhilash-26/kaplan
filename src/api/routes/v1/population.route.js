const express = require('express');
const router = express.Router();
const controller = require('../../controllers/population.controller');
const {validateCountryInput} = require('../../middleware/validate');

router.get('/country-list', controller.getCountryList);
router.get('/country-group', validateCountryInput, controller.getPopulationByCountryGroup);

module.exports = router;
