import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/orders.interface';
import { ordersMock } from './mocks/orders.mock';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<Order[]>> {
    const apiUrl = 'https://api.tiendanube.com';
    const authToken = 'a6667050181492dec792132f038c8d5f08819292';
    const headers = { Authentication: `bearer ${authToken}` };
    const url = `${apiUrl}/2025-03/1894966/orders`;

    return this.httpService
      .get(url, { headers })
      .pipe(map((response) => response.data));
    // return ordersMock;
  }
}
