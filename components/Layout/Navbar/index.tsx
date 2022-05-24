import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { NavbarButton, NavbarOption, NavbarLogin } from './NavbarComponents';


const Navbar: React.FC = () => {
  return (
    <>
      {window.location.pathname === '/preSignUp' ? (
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
      ) : (

        <Flex direction="row" justify='space-between' align='center'>
          <Flex>
            <Link href='/'>
              <Image style={{ cursor: 'pointer' }} src={'https://i.imgur.com/USIbBeU.png'} />
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
    </>
  );
}

export default Navbar;