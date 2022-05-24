import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Instagram, Facebook, WhatsApp, Mail } from '@mui/icons-material';
import { FooterImage, FooterSocialLogos } from './FooterBannerComponents';

const FooterBanner: React.FC = () => {
  return (
    <Flex align='center' justify={['space-between', 'space-between']} direction={['row-reverse', 'row']} mb='1em'>
      <FooterImage image="https://i.imgur.com/RXOqwLf.png" />
      <Flex direction="column">
        <FooterSocialLogos instagram />
        <FooterSocialLogos facebook />
        <FooterSocialLogos wpp />
        <FooterSocialLogos mail />
      </Flex>
    </Flex>
  );
}

export default FooterBanner;