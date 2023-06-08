import { Router } from 'express';

import { listCategoriesController } from './app/controllers/categories/listCategoriesController';

import { listProductsByCategoryController } from './app/controllers/categories/listProductsByCategoryController';

import { createCategoryController } from './app/controllers/categories/createCategoryController';

const route = Router();

route.get('/', listCategoriesController);

route.get('/:id/products', listProductsByCategoryController);

route.post('/', createCategoryController);

export { route as categoriesRoutes };
