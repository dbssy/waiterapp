import { Router } from 'express';

import { listProductsController } from './app/controllers/categories/listProductsController';

import { createProductController } from './app/controllers/categories/createProductController';

const route = Router();

route.get('/', listProductsController);

route.post('/', createProductController);

export { route as productsRoutes };
