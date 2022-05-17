import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Instagram, Facebook, WhatsApp, Mail } from '@mui/icons-material';
import { FooterImage, FooterText } from './FooterComponents';

const Footer: React.FC = () => {
  return (
    <Flex align='center' justify='space-between'>
      <FooterImage image="https://i.imgur.com/RXOqwLf.png" />
      <Flex direction="column">
        <Flex align='center' mb='1em'>
          <Instagram style={{ width: '72px', height: '70px' }} />
          <FooterText>@DAY3_Official</FooterText>
        </Flex>
        <Flex align='center' mb='1em'>
          <Facebook style={{ width: '72px', height: '70px' }} />
          <FooterText>/DAY3_Official</FooterText>
        </Flex>
        <Flex align='center' mb='1em'>
          <WhatsApp style={{ width: '72px', height: '70px' }} />
          <FooterText>+55 31 60606060</FooterText>
        </Flex>
        <Flex align='center'>
          <Mail style={{ width: '72px', height: '70px' }} />
          <FooterText>contato@day3.com.br</FooterText>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;