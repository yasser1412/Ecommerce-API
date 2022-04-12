import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

describe('api/products', () => {
  let token: string;
  beforeAll(() => {
    const secret = process.env.JWT_SECRET as string;
    token = jwt.sign(
      { firstname: 'test', lastname: 'test', email: 'mail@email.com' },
      secret
    );
  });
  it('should return 200 status code on add product at autharized login', async (done) => {
    const res = await request
      .post('/api/products')
      .send({
        name: 'product',
        price: 15,
        category: 'products',
      })
      .set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
    done();
  });
  it('should return 401 status code on add product at unautharized login', async (done) => {
    const res = await request
      .post('/api/products')
      .send({
        name: 'product',
        price: 15,
        category: 'products',
      })
      .set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
    done();
  });

  it('should return 200 status code on index', async (done) => {
    const res = await request.get('/api/products');
    expect(res.statusCode).toBe(200);
    done();
  });

  it('should return 200 on show product', async (done) => {
    const res = await request.get('/api/products/2');
    expect(res.statusCode).toBe(200);
    done();
  });

  it('should return 200 status code on update product at autharized login', async (done) => {
    const res = await request
      .put('/api/products')
      .send({
        id: 2,
        name: 'product1',
        price: 10,
        category: 'products',
      })
      .set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
    done();
  });
  it('should return 401 status code on update product at unautharized login', async (done) => {
    const res = await request
      .put('/api/products')
      .send({
        id: 2,
        name: 'product1',
        price: 10,
        category: 'products',
      })
      .set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
    done();
  });

  it('should return 200 status code on delete product at autharized login', async (done) => {
    const res = await request
      .delete('/api/products/2')
      .set('x-auth-token', token);
    expect(res.statusCode).toBe(200);
    done();
  });
  it('should return 401 status code on delete product at unautharized login', async (done) => {
    const res = await request
      .delete('/api/products/2')
      .set('x-auth-toke', token);
    expect(res.statusCode).toBe(401);
    done();
  });
});
