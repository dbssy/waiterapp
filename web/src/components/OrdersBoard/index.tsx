/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Board, OrdersContainer } from './styles';

import { api } from '@/lib/api';

import { Order } from '@/types/Order';

import { OrderModal } from '@/components/OrderModal';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
  onCancelOrder: (orderId: string) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onChangeOrderStatus,
  onCancelOrder
}: OrdersBoardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenOrder(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE'
      ;

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);

    onChangeOrderStatus(selectedOrder!._id, selectedOrder!.status);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        isLoading={isLoading}
        order={selectedOrder}
        onClose={handleCloseModal}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(order => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenOrder(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
