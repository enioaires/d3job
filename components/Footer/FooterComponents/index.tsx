import { Image, Text } from '@chakra-ui/react';
import React from 'react';

interface PropsImage {
  image: string
}

interface PropsText {
  children: React.ReactNode
}

export const FooterImage: React.FC<PropsImage> = ({ image }) => {
  return (
    <Image
      src={image}
      width='607px'
      height='585px'
    />
  );
}

export const FooterText: React.FC<PropsText> = ({ children }) => {
  return (
    <Text
      fontSize={'28px'}
      fontWeight={'700'}
      textAlign='center'
    >
      {children}
    </Text>
  );
}
