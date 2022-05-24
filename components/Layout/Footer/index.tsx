import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router'

const Footer: React.FC = () => {
  const router = useRouter()

  return (
    <>
      {router.pathname === '/' && (
        <Flex justify='flex-end'>
          <Text fontWeight='bold' fontSize={['8px', '12px']}>Direitos Autorais day3@2021 - Desenvolvido por Unnameds</Text>
        </Flex>
      )}
      {(router.pathname === '/preSignUp' || router.pathname === '/signUpUser') && (
        <Flex justify='flex-end' >
          <Image src="https://i.imgur.com/L5sbHLd.png" alt="" />
        </Flex>
      )}
    </>
  );
}

export default Footer;