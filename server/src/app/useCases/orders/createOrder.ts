import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  const { table, products } = req.body;

  if (!Object.values(req.body).every((value) => value)) {
    return res.status(400).json({ error: 'Todos os campos devem ser preenchidos' });
  }

  const order = await Order.create({ table, products });

  return res.status(201).json(order);
}
