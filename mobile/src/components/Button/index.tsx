import { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

import { Text } from '../Text';

interface ButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  children: ReactNode;
}

export function Button({
  isLoading,
  disabled,
  onPress,
  children,
}: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || isLoading}>
      {!isLoading && (
        <Text color="#fff" weight="600">
          {children}
        </Text>
      )}

      {isLoading && <ActivityIndicator color="#fff" />}
    </Container>
  );
}
