import { Router } from 'express';

import { listOrdersController } from './app/controllers/orders/listOrdersController';

import { createOrderController } from './app/controllers/orders/createOrderController';

import { changeOrderStatusController } from './app/controllers/orders/changeOrderStatusController';

import { cancelOrderController } from './app/controllers/orders/cancelOrderController';

const route = Router();

route.get('/', listOrdersController);

route.post('/', createOrderController);

route.patch('/:id', changeOrderStatusController);

route.delete('/:id', cancelOrderController);

export { route as ordersRoutes };
