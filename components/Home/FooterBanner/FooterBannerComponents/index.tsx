import { Box, Flex, Image, Text, Icon } from '@chakra-ui/react';
import { Instagram, Facebook, WhatsApp, Mail } from '@mui/icons-material';
import React from 'react';

interface PropsImage {
  image: string
}

interface PropsText {
  children: React.ReactNode
}
interface PropsSocialLogos {
  facebook?: boolean
  instagram?: boolean
  wpp?: boolean
  mail?: boolean
}

export const FooterImage: React.FC<PropsImage> = ({ image }) => {
  return (
    <Image
      src={image}
      width={['175px', '607px']}
      height={['173px', '585px']}
    />
  );
}

export const FooterText: React.FC<PropsText> = ({ children }) => {
  return (
    <Text
      fontSize={['10px', '28px']}
      fontWeight={'700'}
      textAlign='center'
    >
      {children}
    </Text>
  );
}

export const FooterSocialLogos: React.FC<PropsSocialLogos> = ({ instagram, facebook, wpp, mail }) => {
  return (
    <>
      {instagram && (
        <Flex align='center' mb='1em'>
          <Icon as={Instagram} w={['28px', '72px']} h={['28px', '72px']} />
          <FooterText>@DAY3_Official</FooterText>
        </Flex>
      )}
      {facebook && (
        <Flex align='center' mb='1em'>
          <Icon as={Facebook} w={['28px', '72px']} h={['28px', '72px']} />
          <FooterText>/DAY3_Official</FooterText>
        </Flex>
      )}
      {wpp && (
        <Flex align='center' mb='1em'>
          <Icon as={WhatsApp} w={['28px', '72px']} h={['28px', '72px']} />
          <FooterText>+55 31 60606060</FooterText>
        </Flex>
      )}
      {mail && (
        <Flex align='center'>
          <Icon as={Mail} w={['28px', '72px']} h={['28px', '72px']} />
          <FooterText>contato@day3.com.br</FooterText>
        </Flex>
      )}
    </>
  );
}
