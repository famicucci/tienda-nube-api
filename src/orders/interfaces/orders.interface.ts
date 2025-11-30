export interface Order {
  id: number;
  customerId: number;
  items: Array<{
    productId: number;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}
