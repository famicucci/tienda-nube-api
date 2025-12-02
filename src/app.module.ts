import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
