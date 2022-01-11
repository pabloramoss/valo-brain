import Head from 'next/head'
import SideBar from '../src/components/SideBar'
import Navbar from '../src/components/Navbar'
import { Flex, Box } from '@chakra-ui/react'
import Body from '../src/components/Body'
import youtube from '../pages/api/youtube'
import SearchbarTest from '../src/components/SearchbarTest'

export default function Home() {
//youtube()
  
  return (
    <Box>
      <Head>
        <title>VALO BRAIN</title>
        <meta name="Valo Brain Website" content="Micro strats for Valorant" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Navbar />
      <Flex>
        <SideBar />
        <Body />
      </Flex>
      <SearchbarTest />
    </Box>
  )
}
