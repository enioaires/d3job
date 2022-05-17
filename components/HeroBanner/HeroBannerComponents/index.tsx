import { Box, Image, Text, useTheme } from '@chakra-ui/react';
import React from 'react';

interface PropsBox {
  children: React.ReactNode
  middle?: boolean
}

interface PropsIcon {
  image: string
  third?: boolean
}

interface PropsText {
  children: React.ReactNode
}

export const HeroBannerImage: React.FC = () => {
  return (
    <Image
      src='https://i.imgur.com/YtXhqqx.png'
      width='454px'
      height='449px'
      mt='2em'
    />
  );
}

export const HeroBannerBox: React.FC<PropsBox> = ({ children, middle }) => {
  const theme = useTheme()
  return (
    <Box
      display='flex'
      width='275px'
      height='180px'
      bgColor={theme.styles.colors.primary}
      borderRadius='16px'
      ml={middle ? '5em' : '0px'}
      mt={middle ? '1em' : '0px'}
      mb={middle ? '1em' : '0px'}
      alignItems='center'
      justifyContent='center'
      flexDirection={'column'}
    >
      {children}
    </Box>
  );
}

export const HeroBannerIcon: React.FC<PropsIcon> = ({ image, third }) => {
  return (
    <Image
      width='63px'
      height={third ? '48px' : '67px'}
      src={image}
    >
    </Image>
  );
}

export const HeroBannerText: React.FC<PropsText> = ({ children }) => {
  const theme = useTheme()
  return (
    <Text
      width='169.45px'
      height='32.56px'
      fontSize={'32px'}
      fontWeight={'400'}
      textAlign='center'
      mb='0.3em'
      color={theme.styles.colors.secondary}
    >
      {children}
    </Text>
  );
}

