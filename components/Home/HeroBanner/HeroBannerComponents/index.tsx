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
      width={['160px', '454px']}
      height={['160px', '449px']}
      mt='2em'
    />
  );
}

export const HeroBannerBox: React.FC<PropsBox> = ({ children, middle }) => {
  const theme = useTheme()
  return (
    <Box
      display='flex'
      width={['103px', '275px']}
      height={['58px', '180px']}
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
      width={['26px', '63px']}
      height={[third ? '18px' : '26px', third ? '48px' : '67px']}
      src={image}
    >
    </Image>
  );
}

export const HeroBannerText: React.FC<PropsText> = ({ children }) => {
  const theme = useTheme()
  return (
    <Text
      fontSize={['10px', '32px']}
      fontWeight={'400'}
      textAlign='center'
      mb='0.3em'
      color={theme.styles.colors.secondary}
    >
      {children}
    </Text>
  );
}

