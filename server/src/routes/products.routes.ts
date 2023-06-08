import { Router } from 'express';

import multer from '../app/middlewares/multer';

import { listProducts } from '../app/useCases/products/listProducts';
import { createProduct } from '../app/useCases/products/createProduct';

const route = Router();

route.get('/', listProducts);

route.post('/', multer.single('image'), createProduct);

export { route as productsRoutes };
