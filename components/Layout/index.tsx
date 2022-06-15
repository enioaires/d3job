import React from 'react';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children?: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxW={['400px', '1440px', '1980px']}>
      <Head>
        <title>D3Job</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default Layout;