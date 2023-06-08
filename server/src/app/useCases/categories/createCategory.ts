import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  const { name, icon } = req.body;

  if (!Object.values(req.body).every((value) => value)) {
    return res.status(400).json({ error: 'Todos os campos devem ser preenchidos' });
  }

  const category = await Category.create({ name, icon });

  return res.status(201).json(category);
}
