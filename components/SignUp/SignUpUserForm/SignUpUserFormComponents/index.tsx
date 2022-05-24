import React from 'react';
import { Box, Flex, Input, Text, useTheme } from '@chakra-ui/react'

interface PropsTitle {
  children: React.ReactNode
}
interface PropsCircle {
  color?: string
}
interface PropsInput {
  id: string
  name: string
  onChange: (value: any) => void
  value: string
  type?: string
  color?: string
  left?: boolean
  as?: any;
  mask?: string;
  maskChar?: string | null;
}

export const SignUpUserFormTitle: React.FC<PropsTitle> = ({ children }) => {
  return (
    <Text
      fontWeight={['700']}
      fontSize={['36px']}
      textAlign="center"
      mb='1em'
      color={'#000'}
    >
      {children}
    </Text>
  );
}

export const SignUpUserFormInput: React.FC<PropsInput> = ({ id, name, onChange, value, color, left, type }) => {
  const theme = useTheme()
  return (
    <Flex>
      <Box
        w={['25px']}
        h={['25px']}
        border={['1px solid']}
        borderColor={['#000']}
        borderRadius={['50px']}
        ml='-2em'
        mr='0.5em'

        backgroundColor={color || theme.styles.colors.red}
      />
      <Input
        id={id}
        name={name}
        type={type || 'text'}
        size='xs'
        borderRadius='7px'
        w={['30em']}
        onChange={onChange}
        value={value}
        bg='#fff'
        border='1px solid'
        mr={left ? '1em' : 0}
        borderColor={theme.styles.colors.primary}
      />
    </Flex>
  );
}