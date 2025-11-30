import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/orders.interface';
import { ordersMock } from './mocks/orders.mock';

@Injectable()
export class OrdersService {
  findAll(): Order[] {
    return ordersMock;
  }
}
