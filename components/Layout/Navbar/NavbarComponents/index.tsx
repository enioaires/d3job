import { Button, Text, useTheme } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface PropsText {
  children: React.ReactNode
}

interface PropsButton {
  children: React.ReactNode
  registro?: boolean
}

export const NavbarOption: React.FC<PropsText> = ({ children }) => {
  return (
    <Text
      cursor='pointer'
      fontWeight={'600'}
      fontSize={['0', '18px']}
      textAlign='center'
      mr='1.5em'
    >
      {children}
    </Text>
  );
}

export const NavbarLogin: React.FC<PropsText> = ({ children }) => {
  return (
    <>
      <Link href='/signin'>
        <Text
          cursor='pointer'
          fontWeight={'700'}
          fontSize={['12px', '32px']}
          lineHeight={['14.5px', '39px']}
          textAlign='center'
          mr='1.5em'
        >
          {children}
        </Text>
      </Link>
    </>
  );
}

export const NavbarVoltar: React.FC<PropsText> = ({ children }) => {
  return (
    <>
      <Link href='/preSignUp'>
        <Text
          cursor='pointer'
          fontWeight={'700'}
          fontSize={['12px', '32px']}
          lineHeight={['14.5px', '39px']}
          textAlign='center'
          mr='1.5em'
        >
          {children}
        </Text>
      </Link>
    </>
  );
}

export const NavbarButton: React.FC<PropsButton> = ({ children, registro }) => {
  const theme = useTheme()
  return (
    <>
      {registro ? (
        <Link href='/preSignUp'>
          <Button
            height={['20px', '53px']}
            bgColor='#5A5A5A'
            borderRadius={'16px'}
            fontWeight={'700'}
            fontSize={['12px', '32px']}
            textAlign='center'
            _hover={{ backgroundColor: '#5A5A5A' }}
            color={theme.styles.colors.secondary}
          >
            {children}
          </Button>
        </Link>
      ) : (
        <Button
          height='53px'
          bgColor='#5A5A5A'
          borderRadius={'16px'}
          fontWeight={'700'}
          fontSize={'32px'}
          textAlign='center'
          _hover={{ backgroundColor: '#5A5A5A' }}
          color={theme.styles.colors.secondary}
        >
          {children}
        </Button>
      )}
    </>
  )
}
