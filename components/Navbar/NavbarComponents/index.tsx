import { Button, Text, useTheme } from '@chakra-ui/react';
import React from 'react';

interface PropsText {
  children: React.ReactNode
  login?: boolean
}

interface PropsButton {
  children: React.ReactNode
}

export const NavbarOption: React.FC<PropsText> = ({ children, login, ...rest }) => {
  return (
    <Text
      cursor='pointer'
      fontWeight={login ? '700' : '600'}
      fontSize={login ? '32px' : '18px'}
      lineHeight={login ? '39px' : '22px'}
      textAlign='center'
      mr='1.5em'
    >
      {children}
    </Text>
  );
}

export const NavbarButton: React.FC<PropsButton> = ({ children }) => {
  const theme = useTheme()
  return (
    <Button
      height='53px'
      bgColor='#5A5A5A'
      borderRadius={'16px'}
      fontWeight={'700'}
      fontSize={'32px'}
      textAlign='center'
      _hover={{ backgroundColor: '#5A5A5A' }}
      color={theme.styles.colors.secondary}
    >
      {children}
    </Button>
  )
}
