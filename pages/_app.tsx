import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'



function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
