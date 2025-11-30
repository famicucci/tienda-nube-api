import { Order } from '../interfaces/orders.interface';

export const ordersMock: Order[] = [
  {
    id: 1,
    customerId: 101,
    items: [
      { productId: 1, quantity: 2, price: 100 },
      { productId: 2, quantity: 1, price: 50 },
    ],
    totalAmount: 250,
    status: 'pending',
    createdAt: new Date('2025-11-30T01:45:23.944Z'),
    updatedAt: new Date('2025-11-30T01:45:23.944Z'),
  },
  // Add more orders as needed
  {
    id: 2,
    customerId: 102,
    items: [{ productId: 3, quantity: 1, price: 200 }],
    totalAmount: 200,
    status: 'paid',
    createdAt: new Date('2025-11-30T01:45:23.944Z'),
    updatedAt: new Date('2025-11-30T01:45:23.944Z'),
  },
];
