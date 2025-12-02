import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TiendaNubeConfigService } from 'src/config/tiendanube-config.service';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [OrdersController],
  providers: [OrdersService, TiendaNubeConfigService],
})
export class OrdersModule {}
