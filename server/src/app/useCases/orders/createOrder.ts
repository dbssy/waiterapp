import { Request, Response } from 'express';

import { io } from '../../../server';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  const { table, products } = req.body;

  if (!Object.values(req.body).every((value) => value)) {
    return res.status(400).json({ error: 'Todos os campos devem ser preenchidos' });
  }

  const order = await Order.create({ table, products });

  const orderDetails = await order.populate('products.product');

  io.emit('orders@new', orderDetails);

  return res.status(201).json(order);
}
