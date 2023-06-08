import { Container } from './styles';

import { Order } from '@/types/Order';

import { OrdersBoard } from '@/components/OrdersBoard';

const orders: Order[] = [
  {
    _id: '64820344e7a279ee2c64f17b',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza de 4 Queijos',
          imagePath: '1686239210314-quatro-queijos.png',
          price: 40,
        },
        quantity: 2,
        _id: '64820344e7a279ee2c64f17c'
      },
      {
        product: {
          name: 'Coca Cola',
          imagePath: '1686240060834-coca-cola.png',
          price: 8,
        },
        quantity: 4,
        _id: '64820344e7a279ee2c64f17d'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
