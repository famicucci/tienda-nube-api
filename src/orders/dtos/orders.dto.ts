import {
  IsInt,
  IsArray,
  IsNumber,
  IsEnum,
  IsDate,
  IsOptional,
} from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  customerId: number;

  @IsArray()
  items: Array<{
    productId: number;
    quantity: number;
    price: number;
  }>;

  @IsNumber()
  totalAmount: number;

  @IsEnum(['pending', 'paid', 'shipped', 'cancelled'])
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
