import client from '../startup/database';

export interface Order {
  id?: number;
  quantity: number;
  status: 'open' | 'complete';
  user_id: number;
}

export class OrdersModel {
  async create(order: Order): Promise<Order | Error> {
    try {
      const sql =
        'INSERT INTO orders(quantity , status ,user_id) VALUES($1 , $2 , $3 ) RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [
        order.quantity,
        order.status,
        order.user_id,
      ]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (err) {
      return new Error(`something went wrong ${err}`);
    }
  }
  async index(): Promise<Order[] | Error> {
    try {
      const sql = 'SELECT * FROM orders';
      const con = await client.connect();
      const res = await con.query(sql);
      const data = res.rows;
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }
  async indexOrdersByUser(user_id: number): Promise<Order[] | Error> {
    try {
      const sql = 'SELECT * FROM orders WHERE user_id = $1';
      const con = await client.connect();
      const res = await con.query(sql, [user_id]);
      const data = res.rows;
      con.release();
      return data;
    } catch (err) {
      return new Error(`something went wrong ${err}`);
    }
  }
  async indexCompletedOrders(user_id: number): Promise<Order[] | Error> {
    try {
      const sql = 'SELECT * FROM orders WHERE user_id = $1 AND status=$2';
      const con = await client.connect();
      const res = await con.query(sql, [user_id, 'complete']);
      const data = res.rows;
      con.release();
      return data;
    } catch (err) {
      return new Error(`something went wrong ${err}`);
    }
  }
  async destroy(order_id: number): Promise<Order[] | Error> {
    try {
      const sql = 'DELETE FROM orders WHERE id = $1 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [order_id]);
      const data = res.rows;
      con.release();
      return data;
    } catch (err) {
      return new Error(`something went wrong ${err}`);
    }
  }
  async completeOrder(order_id: number): Promise<Order | Error> {
    try {
      const sql = 'UPDATE orders SET status=$1 WHERE id=$2 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, ['complete', order_id]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (err) {
      return new Error(`something went wrong ${err}`);
    }
  }
}
