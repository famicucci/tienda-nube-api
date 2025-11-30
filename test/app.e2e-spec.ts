import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { ordersMock } from '../src/orders/mocks/orders.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/orders');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    // me llega en string cuando viene por http entonces lo tengo que convertir para compararlo con el mock
    const responseOrders = response.body.map((order) => ({
      ...order,
      createdAt: new Date(order.createdAt),
      updatedAt: new Date(order.updatedAt),
    }));

    expect(responseOrders).toEqual(ordersMock);
  });
});
