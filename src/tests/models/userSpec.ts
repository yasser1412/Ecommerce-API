// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { UsersModel, User } from '../../models/user';

const user = new UsersModel();
describe('user model test', () => {
  describe('Check that CRUD operations are defined', () => {
    it('should have an index method', () => {
      expect(user.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(user.show).toBeDefined();
    });

    it('should have a create method', () => {
      expect(user.create).toBeDefined();
    });

    it('should have a delete method', () => {
      expect(user.destroy).toBeDefined();
    });

    it('should have a authenticate method', () => {
      expect(user.authenticate).toBeDefined();
    });
  });

  describe('Check CRUD operations', () => {
    it('indexing all users', async () => {
      const allusers = await user.index();
      expect(allusers).toBeInstanceOf(Object);
    });
    it('Creating new User', async () => {
      const userInfo: User = {
        firstname: 'name',
        lastname: 'name',
        email: 'mail@gmail.com',
        password: 'password',
      };
      const createuser = await user.create(userInfo);
      expect(createuser).toBeInstanceOf(Object);
    });
    it('showing specific user with his id', async () => {
      const showUser = await user.show(2);
      expect(showUser).not.toEqual([]);
    });
    it("Shouldn't return Null and authenticate the user", async () => {
      const authenticateUser = await user.authenticate(
        'AmmarMassoud',
        '123456'
      );
      expect(authenticateUser).not.toEqual(null);
    });
    it('deleting specific user with his id', async () => {
      const deleteUser = await user.destroy(2);
      expect(deleteUser).toBeInstanceOf(Object);
    });
  });
});
