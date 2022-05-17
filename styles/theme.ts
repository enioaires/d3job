import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Montserrat, sans-serif',
        bg: '#E5E5E5',
        color: '#5A5A5A',
        lineHeight: 'base',
      },
    },
    colors: {
      primary: '#5A5A5A',
      secondary: '#E5E5E5',
      warning: '#E26F6F'
    },

  }
})