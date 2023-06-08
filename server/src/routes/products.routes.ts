import { Router } from 'express';

import { listProducts } from '../app/useCases/products/listProducts';
import { createProduct } from '../app/useCases/products/createProduct';

const route = Router();

route.get('/', listProducts);

route.post('/', createProduct);

export { route as productsRoutes };
