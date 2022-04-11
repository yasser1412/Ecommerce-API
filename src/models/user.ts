import client from '../startup/database';
import { hash, compareHash } from '../utils/bcrypt';
export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
export class UsersModel {
  async index(): Promise<User[] | Error> {
    try {
      const sql = 'SELECT * FROM users';
      const con = await client.connect();
      const res = await con.query(sql);
      const data = res.rows;
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  async show(id: number): Promise<User | Error> {
    try {
      const sql = 'SELECT * FROM users WHERE id = $1';
      const con = await client.connect();
      const res = await con.query(sql, [id]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  async create(user: User): Promise<User | Error> {
    try {
      const sql =
      'INSERT INTO users(firstname , lastname , email , password) VALUES($1 , $2 , $3 , $4) RETURNING *';
      const con = await client.connect();
      const hashed = hash(user.password);
      const res = await con.query(sql, [
        user.firstname,
        user.lastname,
        user.email,
        hashed,
      ]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  async destroy(id: number): Promise<User | Error> {
    try {
      const sql = 'DELETE FROM users WHERE id = $1 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [id]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  async authenticate(email: string, password: string): Promise<User | Error> {
    try {
      const sql = 'SELECT password FROM users WHERE email=($1)';
      const con = await client.connect();
      const res = await con.query(sql, [email]);
      const user = res.rows[0];
      const validPassword = compareHash(password, user.password);
      con.release();
      if (!validPassword || !user) {
        return new Error(`Invalid username or password.`);
      }
      return user;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }
}
