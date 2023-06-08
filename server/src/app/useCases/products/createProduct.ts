import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  const { name, description, price, category, ingredients } = req.body;

  const imagePath = req.file?.filename;

  if (!Object.values(req.body).every((value) => value)) {
    return res.status(400).json({ error: 'Todos os campos devem ser preenchidos' });
  }

  if (!imagePath) {
    return res.status(400).json({ error: 'Uma imagem deve ser fornecida' });
  }

  const product = await Product.create({
    name,
    description,
    price: Number(price),
    category,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
    imagePath,
  });

  return res.status(201).json(product);
}
