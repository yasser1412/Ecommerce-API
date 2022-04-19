import client from '../startup/database';
export interface Product {
  id?: number;
  name: string;
  price: number;
  category: string;
}
export class ProductsModel {
  async index(): Promise<Product[] | Error> {
    try {
      const sql = 'SELECT * FROM products';
      const con = await client.connect();
      const res = await con.query(sql);
      con.release();
      return res.rows;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  async show(id: number): Promise<Product | Error> {
    try {
      const sql = 'SELECT * FROM products WHERE id = $1';
      const con = await client.connect();
      const res = await con.query(sql, [id]);
      con.release();
      return res.rows[0];
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  async create(product: Product): Promise<Product | Error> {
    try {
      const sql =
        'INSERT INTO products(name , price , category) VALUES($1 , $2 , $3) RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [
        product.name,
        product.price,
        product.category,
      ]);
      con.release();
      return res.rows[0];
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  async update(product: Product): Promise<Product | Error> {
    try {
      const sql =
        'UPDATE products SET name = $1 , price = $2 , category = $3 WHERE id = $4 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [
        product.name,
        product.price,
        product.category,
        product.id,
      ]);
      con.release();
      return res.rows[0];
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  async destroy(id: number): Promise<Product | Error> {
    try {
      const sql = 'DELETE FROM products WHERE id = $1 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [id]);
      con.release();
      return res.rows[0];
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }
}
