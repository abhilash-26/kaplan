const httpStatus = require('http-status');
const axios = require('axios');
const moment = require('moment');
const NodeCache = require('node-cache');
const cache = new NodeCache();

// Get Country List Service
exports.getCountryList = async (req, res) => {
	try {
		if (cache.has('countryList')) {
			return res.status(httpStatus.OK).send(cache.get('countryList'));
		}
		const countryList = await axios({
			method: 'get',
			url: 'https://d6wn6bmjj722w.population.io:443/1.0/countries',
		});
		cache.set('countryList', countryList.data);
		res.status(httpStatus.OK).send(countryList.data);
	} catch (error) {
		res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Server error retrieving countries.');
	}
};

// Get Pouplation of countries service
exports.getPopulationByCountryGroup = async (req, res) => {
	try {
		const date = moment(new Date()).format('YYYY-MM-DD');
		const allPromise = req.query.country.map((item) =>
			axios({
				method: 'get',
				url: `https://d6wn6bmjj722w.population.io/1.0/population/${item}/${date}/`,
			})
		);
		const result = await Promise.all(allPromise);
		const dataToSend = result.map((item, index) => {
			return {
				country: req.query.country[index],
				date: item.data.total_population.date,
				total_population: item.data.total_population.population,
			};
		});
		dataToSend.sort((a, b) =>
			req.query.sortOrder == 0
				? b.total_population - a.total_population
				: a.total_population - b.total_population
		);
		res.status(httpStatus.OK).send(dataToSend);
	} catch (error) {
		res
			.status(httpStatus.INTERNAL_SERVER_ERROR)
			.send('Server error retrieving population of countries.');
	}
};
