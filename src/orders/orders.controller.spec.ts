import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ordersMock } from './mocks/orders.mock';

describe('OrdersController', () => {
  let ordersController: OrdersController;

  beforeEach(async () => {
    const orders: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    }).compile();

    ordersController = orders.get<OrdersController>(OrdersController);
  });

  describe('getOrders', () => {
    it('should return the list of orders', () => {
      expect(ordersController.getOrders()).toBe(ordersMock);
    });
  });
});
