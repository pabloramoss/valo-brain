import React from 'react';
import { Flex, Img, Heading } from '@chakra-ui/react'


const HomeVideoItem = (props)=> {

  return(
    <Flex direction="column" w="360px" mx="15px">
      <Img h="202px" backgroundColor="#4f4747" borderRadius={10} mb={4} />
      <Heading color="gray.300" ms={10} size="md">{props.title}</Heading>
    </Flex>
  )
}
export default HomeVideoItem