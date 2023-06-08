import { ReactNode } from 'react';

import { Container } from './styles';

import { Text } from '../Text';

interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
  disabled?: boolean;
}

export function Button({ onPress, children, disabled }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text color="#fff" weight="600">
        {children}
      </Text>
    </Container>
  );
}
