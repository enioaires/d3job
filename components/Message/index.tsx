import React from 'react';
import { Text, useTheme } from '@chakra-ui/react';

// import { Container } from './styles';

interface IText {
  children: React.ReactNode
  warning?: boolean
}

const Message: React.FC<IText> = ({ children, warning }) => {
  const theme = useTheme()
  return (
    <Text
      color={warning ? theme.styles.colors.warning : theme.styles.colors.error}
      fontSize={'sm'}
      ml={'0.5em'}
      fontWeight={'semibold'}
    >
      {children}
    </Text>
  );
}

export default Message;