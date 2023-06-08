import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { productsRoutes } from './products.routes';
import { ordersRoutes } from './orders.routes';

const router = Router();

router.use('/category', categoriesRoutes);

router.use('/products', productsRoutes);

router.use('/orders', ordersRoutes);

export { router as routes };
