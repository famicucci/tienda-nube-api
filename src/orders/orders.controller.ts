import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/orders.interface';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders(): Order[] {
    return this.ordersService.findAll();
  }
}
