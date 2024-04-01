const {
	getCountryList,
	getPopulationByCountryGroup,
} = require('../services/population.service');
const httpStatus = require('http-status');
exports.getCountryList = async (req, res) => {
	try {
		await getCountryList(req, res);
	} catch (error) {
		res.status(httpStatus.GATEWAY_TIMEOUT).send(error.message);
	}
};

exports.getPopulationByCountryGroup = async (req, res) => {
	try {
		await getPopulationByCountryGroup(req, res);
	} catch (error) {
		res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
	}
};
