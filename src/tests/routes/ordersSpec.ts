import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

describe('store api', () => {
    let token: string;
    async function createUser() {
        await request.post('/api/users').send({
        firstname: 'test',
        lastname: 'test',
        email: 'mail@email.com',
        password: 'password'
        });
    }
    
    beforeAll(() => {
      const secret = process.env.JWT_SECRET as string;
      token = jwt.sign({ firstname: 'test', lastname: 'test', email: 'mail@email.com' }, secret);
      createUser();
    });

  it('should return 200 status code on add order at autharized login', async () => {
    const res = await request
      .post('/api/orders')
      .send({
        quantity: 5,
        user_id: 1,
      })
      .set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
  });
  it('should return 401 status code on add order at unautharized login', async () => {
    const res = await request
      .post('/api/orders')
      .send({
        quantity: 5,
        user_id: 1,
      })
      .set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
  });

  it('should return 200 status code on orders by user at autharized login', async () => {
    const res = await request.get('/api/orders/1').set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
  });
  it('should return 401 status code on orders by user at unautharized login', async () => {
    const res = await request.get('/api/orders/1').set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
  });

  it('should return 200 status code on completed orders at autharized login', async () => {
    const res = await request.get('/api/orders/completedorders/1').set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
  });
  it('should return 401 status code on completed orders at unautharized login', async () => {
    const res = await request.get('/api/orders/completedorders/1').set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
  });

  it('should return 200 status code on complete at autharized login', async () => {
    const res = await request.put('/api/orders/completeorder/1').set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
  });
  it('should return 401 status code on complete at unautharized login', async () => {
    const res = await request.put('/api/orders/completeorder/1').set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
  });

  it('should return 200 status code on delete order at autharized login', async () => {
    const res = await request.delete('/api/orders/1').set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
  });
  it('should return 401 status code on delete order at autharized login', async () => {
    const res = await request.delete('/api/orders/1').set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
  });

  it('should return 200 code status on GET all orders at autharized login', async () => {
      const res = await request.get('/api/orders').set('x-auth-token', token);
      expect(res.statusCode).toBe(200);
  });
  it('should return 401 code status on GET all orders at unautharized login', async () => {
      const res = await request.get('/api/orders').set('x-auth-toke', token);
      expect(res.statusCode).toBe(401);
  });
});