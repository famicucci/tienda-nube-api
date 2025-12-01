import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/orders.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders(): Observable<AxiosResponse<Order[]>> {
    return this.ordersService.findAll();
  }
}
