import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);
import dotenv from 'dotenv';
dotenv.config();

describe('api/users', () => {
  let token: string;
  beforeAll(() => {
    const secret = process.env.JWT_SECRET as string;
    token = jwt.sign(
      { firstname: 'test', lastname: 'test', email: 'mail@email.com' },
      secret
    );
  });

  it('should return 200 status code on creating a new user', async () => {
    const res = await request.post('/api/users').send({
      firstname: 'tesssst',
      lastname: 'tesssst',
      email: 'mail@email.com',
      password: 'password',
    });
    expect(res.statusCode).toBe(200);
  });

  it('should return 200 status code on showing all users info at autharized login', async () => {
    const res = await request.get('/api/users').set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
  });
  it('should return 401 status code on showing all users info at unautharized login', async () => {
    const res = await request.get('/api/users').set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
  });

  it('should return 200 status code on show user at autharized login', async () => {
    const res = await request.get('/api/users/2').set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
  });
  it('should return 401 status code on show user at unautharized login', async () => {
    const res = await request.get('/api/users/2').set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
  });

  it('should return 200 status code on delete user at autharized login', async () => {
    const res = await request.delete('/api/users/2').set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
  });
  it('should return 401 status code on delete user at unautharized login', async () => {
    const res = await request.delete('/api/users/2').set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
  });
});
