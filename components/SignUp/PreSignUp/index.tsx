import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { PreSignUpTitle, PreSignUpText, PreSignUpBox, PreSignUpIcon, PreSignUpBoxText } from './PreSignUpComponents';

const PreSignUp: React.FC = () => {
  return (
    <>
      <PreSignUpTitle>Vamos la criar a conta.</PreSignUpTitle>
      <PreSignUpTitle>Primeiro escolha o tipo de conta deseja criar.</PreSignUpTitle>
      <Flex justify={'space-between'} mt={'55px'} >
        <Flex direction='column' align='center'>
          <PreSignUpText>Se no caso for prestar serviços para lojas e outras pessoas escolha <b>SERVIÇOS</b></PreSignUpText>
          <PreSignUpBox>
            <PreSignUpBoxText>SERVIÇOS</PreSignUpBoxText>
            <PreSignUpIcon image="https://i.imgur.com/yJWbn7S.png" />
          </PreSignUpBox>
        </Flex>
        <Flex direction='column' align='center'>
          <PreSignUpText>Deseja colocar sua loja para compartilhar horarios de funcionamento e contratar serviços escolha  <b>LOJAS</b></PreSignUpText>
          <PreSignUpBox>
            <PreSignUpBoxText>LOJAS</PreSignUpBoxText>
            <PreSignUpIcon image="https://i.imgur.com/8UWN7ZT.png" />
          </PreSignUpBox>
        </Flex>
        <Flex direction='column' align='center'>
          <PreSignUpText>Quer apenas contratar um serviço selecione <b>USUÁRIOS</b></PreSignUpText>
          <PreSignUpBox usuario>
            <PreSignUpBoxText>USUÁRIOS</PreSignUpBoxText>
            <PreSignUpIcon third image="https://i.imgur.com/dHGFm7L.png" />
          </PreSignUpBox>
        </Flex>
      </Flex>
    </>
  );
}

export default PreSignUp;