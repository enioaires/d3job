import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import { NavbarButton, NavbarOption } from './NavbarComponents';


const Navbar: React.FC = () => {
  return (
    <Flex direction="row" justify='space-between' align='center'>
      <Flex>
        <Image src={'https://i.imgur.com/USIbBeU.png'} />
      </Flex>
      <Flex p={3} align='center'>
        <NavbarOption>Como funciona?</NavbarOption>
        <NavbarOption>Contato</NavbarOption>
        <NavbarOption login>Login</NavbarOption>
        <NavbarButton>Inscreva-se</NavbarButton>
      </Flex>
    </Flex>
  );
}

export default Navbar;