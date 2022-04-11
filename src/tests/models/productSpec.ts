import { Product, ProductsModel } from '../../models/product';

const product = new ProductsModel();

describe('product model test', () => {
  describe('Check that all CRUD operations for products are defined', () => {
    it('should have an index method', () => {
      expect(product.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(product.show).toBeDefined();
    });

    it('should have a create method', () => {
      expect(product.create).toBeDefined();
    });

    it('should have a update method', () => {
      expect(product.update).toBeDefined();
    });

    it('should have a delete method', () => {
      expect(product.destroy).toBeDefined();
    });
  });
  describe('Test CRUD operations for Products', () => {
    it('Index Method should return an empty array', async () => {
      const allProducts = (await product.index()) as Product[];
      expect(allProducts).toHaveSize(0);
    });
    it('Create Method should return an object', async () => {
      const prodInfo: Product = {
        name: 'Test',
        price: 50,
        category: 'tests',
      };
      const newProduct = await product.create(prodInfo);
      expect(newProduct).toBeInstanceOf(Object);
    });
    it('Should get an object', async () => {
      const singleProduct = await product.show(2);
      expect(singleProduct).toBeInstanceOf(Object);
    });
    it('Should Delete the Product with id 1', async () => {
      const products = await product.index();
      expect(products).toHaveSize(0);
    });
    it('Should Delete the Product with id 1', async () => {
      const deletedProduct = await product.destroy(2);
      expect(deletedProduct).toBeInstanceOf(Object);
    });
  });
});
