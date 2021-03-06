import React from 'react';
import { Box } from '@chakra-ui/react'
import SearchFilters from './SearchFilters';
import Hero from './Hero';
import HomeVideos from './HomeVideos';


const Body = (props)=> {

  return(
    <Box w="100%" h="94vh" backgroundColor="#141212">
      <SearchFilters info={props}/>
      <Hero />
      <HomeVideos />
    </Box>
  )
}
export default Body