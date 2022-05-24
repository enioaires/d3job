import React from 'react';
import { Box, Text, useTheme, Image } from '@chakra-ui/react'

interface PropsTitle {
  children: React.ReactNode
}
interface PropsText {
  children: React.ReactNode
}
interface PropsBox {
  children: React.ReactNode
  middle?: boolean
}

interface PropsIcon {
  image: string
  third?: boolean
}

export const PreSignUpTitle: React.FC<PropsTitle> = ({ children }) => {
  return (
    <Text
      fontWeight={['700']}
      fontSize={['36px']}
      textAlign="center"
      color={'#000'}
    >
      {children}
    </Text>
  );
}

export const PreSignUpText: React.FC<PropsText> = ({ children }) => {
  return (
    <Text
      fontWeight={['400']}
      fontSize={['16px']}
      textAlign="center"
      color={'#000'}
      mb={'32px'}
    >
      {children}
    </Text>
  );
}

export const PreSignUpBox: React.FC<PropsBox> = ({ children, middle }) => {
  const theme = useTheme()
  return (
    <Box
      display='flex'
      width={['103px', '275px']}
      height={['58px', '180px']}
      bgColor={theme.styles.colors.primary}
      borderRadius='16px'
      ml={middle ? '0.5em' : '0px'}
      mr={middle ? '0.5em' : '0px'}
      alignItems='center'
      justifyContent='center'
      flexDirection={'column'}
      cursor='pointer'
    >
      {children}
    </Box>
  );
}

export const PreSignUpIcon: React.FC<PropsIcon> = ({ image, third }) => {
  return (
    <Image
      width={['26px', '63px']}
      height={[third ? '18px' : '26px', third ? '48px' : '67px']}
      src={image}
    >
    </Image>
  );
}

export const PreSignUpBoxText: React.FC<PropsText> = ({ children }) => {
  const theme = useTheme()
  return (
    <Text
      fontSize={['10px', '32px']}
      fontWeight={'400'}
      textAlign='center'
      mb='0.3em'
      color={theme.styles.colors.secondary}
    >
      {children}
    </Text>
  );
}

