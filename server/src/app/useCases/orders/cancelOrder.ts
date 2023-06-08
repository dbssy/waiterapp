import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
  const { id } = req.params;

  await Order.findByIdAndDelete(id);

  return res.sendStatus(204);
}
