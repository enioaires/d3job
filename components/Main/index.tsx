import { Box, Flex, Image, Text, useTheme } from '@chakra-ui/react';
import React from 'react';
import { MainIcon, MainImage, MainText, MainTitle, MainWarning } from './MainComponents';

const Main: React.FC = () => {
  const theme = useTheme()
  return (
    <div>
      <Image src="https://i.imgur.com/O2AFbK7.png" alt="" />
      <Flex bgColor={theme.styles.colors.primary} height="100vh" p={20} align={'flex-start'} direction='row'>
        <Flex direction="column">
          <MainTitle>Como funciona?</MainTitle>
          <MainText>
            Nosso objetivo nesse projeto é conseguir ajudar a compartilhar serviços de pessoas, por sua região.
            Para alguns de nós que moramos sozinhos em lugares novos as vezes precisamos de algum serviço, como troca de encanamento ou afiação e não conhecemos ninguém pela região, esse é o site ideial para encontrar pessoas para te ajudar.
            Não somente pessoas como lojas, precisam de manutenção em certas areas e não tem contato de ninguém então nesse site permitimos os cadastro de:
          </MainText>

          <MainText>
            º Consumidores
          </MainText>
          <MainText>
            º Prestadores
          </MainText>
          <MainText>
            º Lojas
          </MainText>
          <Flex direction="row" mt='2em' align="center">
            <MainIcon image="https://i.imgur.com/ff0VVlX.png" />
            <MainWarning>
              Ainda não realizamos pagamentos na plataforma.
            </MainWarning>
          </Flex>
        </Flex>
        <MainImage image="https://i.imgur.com/qhGrRcl.png" />
      </Flex>
      <Image src="https://i.imgur.com/TvZOLbg.png" alt="" />
    </div>
  );
}

export default Main;