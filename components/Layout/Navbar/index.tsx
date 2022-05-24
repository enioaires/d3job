import React from 'react';
import { useRouter } from 'next/router'
import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { NavbarButton, NavbarOption, NavbarLogin, NavbarVoltar } from './NavbarComponents';

const Navbar: React.FC = () => {
  const router = useRouter()
  return (
    <>
      {router.pathname === '/' && (
        <Flex direction="row" justify='space-between' align='center'>
          <Flex>
            <Link href='/'>
              <Image style={{ cursor: 'pointer' }} src={'https://i.imgur.com/USIbBeU.png'} w={['95px', 'auto']} h={['40px', 'auto']} />
            </Link>
          </Flex>
          <Flex p={3} align='center'>
            <NavbarOption>Como funciona?</NavbarOption>
            <NavbarOption>Contato</NavbarOption>
            <NavbarLogin>Login</NavbarLogin>
            <Link href='/preSignUp'>
              <NavbarButton registro>Inscreva-se</NavbarButton>
            </Link>
          </Flex>
        </Flex>
      )}

      {router.pathname === '/preSignUp' && (
        <Flex direction="row" justify='space-between' align='center' mb='2em'>
          <Flex>
            <Link href='/'>
              <Image style={{ cursor: 'pointer' }} src={'https://i.imgur.com/USIbBeU.png'} />
            </Link>
          </Flex>
          <Flex p={3} align='center'>
            <NavbarLogin>Login</NavbarLogin>
          </Flex>
        </Flex>
      )}

      {router.pathname === '/signUpUser' && (
        <Flex direction="row" justify='space-between' align='center' mb='2em'>
          <Flex>
            <Link href='/'>
              <Image style={{ cursor: 'pointer' }} src={'https://i.imgur.com/USIbBeU.png'} />
            </Link>
          </Flex>
          <Flex p={3} align='center'>
            <NavbarVoltar>Voltar</NavbarVoltar>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default Navbar;