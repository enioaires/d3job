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
      fontSize={[16, 32]}
      fontWeight={'700'}
      textAlign={['center', 'justify']}
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
      fontSize={[10, 16]}
      fontWeight={'400'}
      textAlign={['center', 'justify']}
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
      fontSize={[10, 15]}
      fontWeight={'400'}
      textAlign={['center', 'justify']}
      color={theme.styles.colors.error}
    >
      {children}
    </Text>
  );
}

export const MainIcon: React.FC<PropsImage> = ({ image }) => {
  return (
    <Image
      width={['14px', '26px']}
      src={image}
      mr={['0.3em', '1em']}
    />

  );
}

export const MainImage: React.FC<PropsImage> = ({ image }) => {
  return (
    <Image
      width={['0', '462px']}
      height={['0', '404px']}
      src={image}
      mt={['0', '20em']}
    />
  );
}
