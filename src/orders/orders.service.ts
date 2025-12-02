import { Injectable } from '@nestjs/common';
import { Order } from './interfaces/orders.interface';
import { ordersMock } from './mocks/orders.mock';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { TiendaNubeConfigService } from 'src/config/tiendanube-config.service';

@Injectable()
export class OrdersService {
  private readonly apiUrl: string;
  private readonly headers: Record<string, string>;

  constructor(
    private readonly httpService: HttpService,
    private readonly tiendaNubeConfigService: TiendaNubeConfigService,
  ) {
    this.apiUrl = this.tiendaNubeConfigService.getApiUrl();
    this.headers = this.tiendaNubeConfigService.getHeaders();
  }

  findAll(): Observable<AxiosResponse<Order[]>> {
    return this.httpService
      .get(`${this.apiUrl}/orders`, { headers: this.headers })
      .pipe(map((response) => response.data));
    // return ordersMock;
  }
}
