import React from 'react';
import { Flex, Text, Link, Input, FormControl , Box } from '@chakra-ui/react'

const Navbar = ()=> {

  return(
    <Flex backgroundColor="#2B2A2A" h="6vh" alignItems="center" justifyContent="center">
      <FormControl w="40vw" >
        <Input id='email' placeholder='Buscar' type='email' backgroundColor="#5A5959"/>
      </FormControl>
    </Flex>
  )
}
export default Navbar