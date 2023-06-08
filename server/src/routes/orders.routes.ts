import { Router } from 'express';

import { listOrders } from '../app/useCases/orders/listOrders';
import { createOrder } from '../app/useCases/orders/createOrder';
import { changeOrderStatus } from '../app/useCases/orders/changeOrderStatus';
import { cancelOrder } from '../app/useCases/orders/cancelOrder';

const route = Router();

route.get('/', listOrders);

route.post('/', createOrder);

route.patch('/:id', changeOrderStatus);

route.delete('/:id', cancelOrder);

export { route as ordersRoutes };
