import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  CategoriesContainer,
  CenteredContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles';

import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { Cart } from '../components/Cart';

export function Main() {
  const [isLoading] = useState(false);
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [products] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading ? (
          <CenteredContainer>
            <ActivityIndicator color="#D73035" size="large" />
          </CenteredContainer>
        ) : (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            {products.length > 0 ? (
              <MenuContainer>
                <Menu
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </MenuContainer>
            ) : (
              <CenteredContainer>
                <Empty />

                <Text color="#666" style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>
            )}
          </>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              disabled={isLoading}
              onPress={() => setIsTableModalVisible(true)}
            >
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
