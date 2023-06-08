import { FlatList, Modal } from 'react-native';

import {
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  PriceContainer
} from './styles';

import { Product } from '../../types/Product';

import { Text } from '../Text';
import { Close } from '../Icons/Close';

import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModal {
  visible: boolean;
  product: null | Product;
  onClose: () => void;
}

export function ProductModal({ visible, product, onClose }: ProductModal) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.15.174:3333/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text
            color="#666"
            style={{ marginTop: 8 }}
          >
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text color="#666" weight="600">Ingredientes</Text>

            <FlatList
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text
                    size={14}
                    color="#666"
                    style={{ marginLeft: 20 }}
                  >
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={() => alert('ok')}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
