import type { NextPage } from 'next'
import { HeroBanner, Main } from '../components'


const Home: NextPage = () => {
  return (
    <>
      <HeroBanner />
      <Main />
    </>
  )
}

export default Home
