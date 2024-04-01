const express = require('express');
const router = express.Router();
const controller = require('../../controllers/population.controller');

router.get('/country-list', controller.getCountryList);
router.get('/country-group', controller.getPopulationByCountryGroup);

module.exports = router;
