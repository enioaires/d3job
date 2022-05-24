import { extendTheme } from '@chakra-ui/react'

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
}
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Montserrat, sans-serif',
        bg: '#fff',
        color: '#5A5A5A',
        lineHeight: 'base',
      },
    },
    breakpoints: {
      sm: '400px',
      md: '1366px',
      lg: '1980px',
    },
    colors: {
      primary: '#5A5A5A',
      secondary: '#E5E5E5',
      warning: '#E26F6F'
    },
  }
})