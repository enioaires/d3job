import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { HeroBannerBox, HeroBannerIcon, HeroBannerImage, HeroBannerText } from './HeroBannerComponents';

// import { Container } from './styles';

const HeroBanner: React.FC = () => {
  return (
    <Flex justify={'space-between '} p={6}>
      <HeroBannerImage />
      <Flex direction='column' mr='4em'>
        <HeroBannerBox>
          <HeroBannerText>SERVIÇOS</HeroBannerText>
          <HeroBannerIcon image="https://i.imgur.com/yJWbn7S.png" />
        </HeroBannerBox>
        <HeroBannerBox middle>
          <HeroBannerText>LOJAS</HeroBannerText>
          <HeroBannerIcon image="https://i.imgur.com/8UWN7ZT.png" />
        </HeroBannerBox>
        <HeroBannerBox>
          <HeroBannerText>USUÁRIOS</HeroBannerText>
          <HeroBannerIcon third image="https://i.imgur.com/dHGFm7L.png" />
        </HeroBannerBox>
      </Flex>
    </Flex>
  );
}

export default HeroBanner;