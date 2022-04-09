import { hashSync, compareSync } from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

function hash(password: string): string {
  const pepper = process.env.BCRYPT_PASSWORD;
  const rounds = process.env.SALT_ROUNDS;
  const hash = hashSync(password + pepper, parseInt(rounds as string));
  return hash;
}
function compareHash(password: string, hash_string: string): boolean {
  const pepper = process.env.BCRYPT_PASSWORD;
  const hash = compareSync(password + pepper, hash_string);
  return hash;
}
export { hash, compareHash };
