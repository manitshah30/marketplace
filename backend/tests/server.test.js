const request = require('supertest');
const app = require('../index'); // Adjust according to your index.js location

describe('Auth API', () => {
    it('should signup a new user', async () => {
        const res = await request(app)
            .post('/auth/signup')
            .send({
               
                email: "test@example.com",
                password: "password123"
            });
        expect(res.statusCode).toEqual(201);
    });

    it('should login a user', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({
                email: "test@example.com",
                password: "password123"
            });
        expect(res.statusCode).toEqual(200);
    });
});
