import { Image, Text, useTheme } from '@chakra-ui/react';
import React from 'react';

interface PropsTitle {
  children: React.ReactNode
}

interface PropsImage {
  image: string
}

export const MainTitle: React.FC<PropsTitle> = ({ children }) => {
  const theme = useTheme()
  return (
    <Text
      mt='3em'
      fontSize={'32px'}
      fontWeight={'700'}
      textAlign={'justify'}
      color={theme.styles.colors.secondary}
    >
      {children}
    </Text>
  );
}

export const MainText: React.FC<PropsTitle> = ({ children }) => {
  const theme = useTheme()
  return (
    <Text
      fontSize={'16px'}
      fontWeight={'400'}
      textAlign={'justify'}
      color={theme.styles.colors.secondary}
      mt='2em'
    >
      {children}
    </Text>
  );
}

export const MainWarning: React.FC<PropsTitle> = ({ children }) => {
  const theme = useTheme()
  return (
    <Text
      fontSize={'15px'}
      fontWeight={'400'}
      textAlign={'justify'}
      color={theme.styles.colors.warning}
    >
      {children}
    </Text>
  );
}

export const MainIcon: React.FC<PropsImage> = ({ image }) => {
  return (
    <Image
      width={'26px'}
      height={'26px'}
      src={image}
      mr='1em'
    />

  );
}

export const MainImage: React.FC<PropsImage> = ({ image }) => {
  return (
    <Image
      width={'462px'}
      height={'404px'}
      src={image}
      mt='20em'
    />

  );
}
