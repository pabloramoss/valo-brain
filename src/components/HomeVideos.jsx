import React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/react'
import HomeVideoItem from './HomeVideoItem';


const HomeVideos = ()=> {

  return(
      <Box mt="50px" justifyContent="center">
        <Flex direction="column" alignItems="center">
          <Box>
            <Heading ms="15px" color="gray.300" py="30px" alignSelf="start" size="sm">Subidos recientemente</Heading>
            <Flex w="60vw">
              <HomeVideoItem title="Titulo de video 1"/>
              <HomeVideoItem title="Titulo de video 2"/>
              <HomeVideoItem title="Titulo de video 3"/>
            </Flex>
          </Box>

        </Flex>
      </Box>
  )
}
export default HomeVideos