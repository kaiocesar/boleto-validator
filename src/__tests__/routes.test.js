const request = require('supertest');
const server = require('../index.js');

describe('Route test', () =>{
	test('It should return 404 status', async () => {
		return request(server)
			.get('/boletos')
			.then(response => {
				expect(response.statusCode).toBe(404);
			});
	});

	test('It should return 404 status because the code lenght isn\'t enough', async () => {
		return request(server)
			.get('/boletos/123456')
			.then(response => {
				expect(response.statusCode).toBe(404);
			});
	});

	test('It should return 200 status', async () => {
		return request(server)
			.get('/boletos/00193373700000001000500940144816060680935031')
			.then(response => {
				expect(response.statusCode).toBe(200);
			});
	});

	
});

