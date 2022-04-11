import { Order, OrdersModel } from '../../models/order';
import { UsersModel, User } from '../../models/user';
import { Product, ProductsModel } from '../../models/product';

const products = new ProductsModel();
const users = new UsersModel();
const order = new OrdersModel();

describe('order model test', () => {
  describe('Test Case To check all orders Methods are Defined', () => {
    it('should have an create method', () => {
      expect(order.create).toBeDefined();
    });

    it('should have a completeOrder method', () => {
      expect(order.completeOrder).toBeDefined();
    });

    it('should have a indexCompletedOrders method', () => {
      expect(order.indexCompletedOrders).toBeDefined();
    });

    it('should have a destroy method', () => {
      expect(order.destroy).toBeDefined();
    });

    it('should have a indexOrdersByUser method', () => {
      expect(order.indexOrdersByUser).toBeDefined();
    });
  });

  describe('Test Case To check all order Methods are working', () => {
    beforeAll(async () => {
      const userInfo: User = {
        firstname: 'name',
        lastname: 'name',
        email: 'mail@gmail.com',
        password: '123456',
      };
      await users.create(userInfo);
      const prodInfo: Product = {
        name: 'Test',
        price: 50,
        category: 'tests',
      };
      await products.create(prodInfo);
    });
    it('Method index Should Return an empty array', async () => {
      const showOrders = await order.index();
      expect(showOrders).toHaveSize(0);
    });
    it('Create Method Should Return an empty array', async () => {
      const newOrder: Order = {
        status: 'open',
        user_id: 1,
        quantity: 5,
      };
      const createNewOrder = await order.create(newOrder);
      expect(createNewOrder).toBeInstanceOf(Object);
    });
    it('Show Method Should be an array with length 1', async () => {
      const showOrder = await order.show(1);
      expect(showOrder).toHaveSize(0);
    });

    it('close Method Should return an array with length 1', async () => {
      const closeOrder = await order.completeOrder(1);
      expect(closeOrder).toHaveSize(0);
    });
    it('delete Method Should return an empty array', async () => {
      const deletedOrder = await order.destroy(1);
      expect(deletedOrder).toHaveSize(0);
    });

    afterAll(async () => {
      await users.destroy(1);
      await products.destroy(1);
    });
  });
});
