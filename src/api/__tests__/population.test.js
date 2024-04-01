const request = require('supertest');
const app = require('../../config/express');

describe('GET /population/country-list', () => {
	it('should return all country list', async () => {
		return request(app)
			.get('/api/v1/population/country-list')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.statusCode).toBe(200);
			});
	});
});

describe('GET /population/country-group', () => {
	it('should return all population list grouped by country', async () => {
		const country = ['India', 'Brazil'];
		return request(app)
			.get('/api/v1/population/country-group')
			.query({country: country})
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.statusCode).toBe(200);
			});
	});
});
