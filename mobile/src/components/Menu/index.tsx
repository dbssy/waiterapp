import { useState } from 'react';
import { FlatList } from 'react-native';

import {
  AddToCartButton,
  ProductContainer,
  ProductDetails,
  ProductImage,
  Separator
} from './styles';

import { ProductModal } from '../ProductModal';
import { Text } from '../Text';
import { PlusCircle } from '../Icons/PlusCircle';

import { Product } from '../../types/Product';

import { formatCurrency } from '../../utils/formatCurrency';

import { products } from '../../mocks/products';

export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        product={selectedProduct}
        onClose={() => setIsModalVisible(false)}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.15.174:3333/uploads/${product.imagePath}`
              }}
            />

            <ProductDetails>
              <Text weight="600">{product.name}</Text>

              <Text
                color="#666"
                size={14}
                style={{ marginVertical: 8 }}
              >
                {product.description}
              </Text>

              <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCartButton>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
