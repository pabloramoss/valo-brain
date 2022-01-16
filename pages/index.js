import React, {useState} from "react"
import Head from 'next/head'
import SideBar from '../src/components/SideBar'
import Navbar from '../src/components/Navbar'
import { Flex, Box, Stack } from '@chakra-ui/react'
import Body from '../src/components/Body'
import youtube from '../pages/api/youtube'
import SearchbarTest from '../src/components/SearchbarTest'
import VideoList from "../src/components/VideoList"

export default function Home() {
  //youtube()
  const [videos, setVideos] = useState([])
  const [selectedVideos, setSelectedVideos] = useState(null)
  const videoData = (videos)=>{
    console.log(videos)
    setVideos(videos)
  }
  const handleVideoSelect = (video) =>{
    setSelectedVideos(video)
  } //ver esta funcion que creo que no hace nada
  
  return (
    <Box>
      <Head>
        <title>VALO BRAIN</title>
        <meta name="Valo Brain Website" content="Micro strats for Valorant" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Navbar/>
      <Flex>
        <SideBar />
        <Stack>
          <Body dataVideo={videoData} />
          <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
        </Stack>
      </Flex>
      {/*<SearchbarTest />*/}
    </Box>
  )
}
