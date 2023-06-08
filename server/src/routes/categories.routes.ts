import { Router } from 'express';

import { listCategories } from '../app/useCases/categories/listCategories';
import { listProductsByCategory } from '../app/useCases/categories/listProductsByCategory';
import { createCategory } from '../app/useCases/categories/createCategory';

const route = Router();

route.get('/', listCategories);

route.get('/:id/products', listProductsByCategory);

route.post('/', createCategory);

export { route as categoriesRoutes };
