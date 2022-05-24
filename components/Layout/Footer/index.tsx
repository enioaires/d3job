import { Flex, Text } from '@chakra-ui/react';
import React from 'react';


const Footer: React.FC = () => {
  return (
    <Flex justify='flex-end'>
      <Text fontWeight='bold' fontSize={['8px', '12px']}>Direitos Autorais day3@2021 - Desenvolvido por Unnameds</Text>
    </Flex>
  );
}

export default Footer;