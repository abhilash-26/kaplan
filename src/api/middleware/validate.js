const httpStatus = require('http-status');

exports.validateCountryInput = async (req, res, next) => {
	if (typeof req.query.country == 'string') {
		req.query.country = [req.query.country];
	}
	if (!req.query.country || req.query.country?.length < 1) {
		res.status(httpStatus.PRECONDITION_FAILED).send('At least one country is required');
	} else {
		next();
	}
};
