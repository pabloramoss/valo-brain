import React, {useState} from 'react';
import { Flex, Divider, Avatar, Text, Heading, IconButton, Menu ,Spacer, Box } from '@chakra-ui/react'
import {  HamburgerIcon } from '@chakra-ui/icons';
import { FaYoutube, FaTwitter, FaTiktok, FaHome, FaUser, FaShare, FaHandHoldingHeart } from "react-icons/fa";
import NavItem from './NavItem';
import {motion} from "framer-motion"


const SideBar = ()=> {
  const [navSize, setNavSize] = useState("large")
  
  return(
    <Flex
    pos="sticky"
    h="94vh"
    boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
    w={navSize== "small" ? "75px" : "200px"}
    flexDir="column"
    justifyContent="space-between"
    backgroundColor="#2B2A2A"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton 
          aria-label="Open Menu"
          background="none"
          _hover={{background:"none"}}
          icon={<HamburgerIcon color="white"/>}
          onClick={()=>{
            if (navSize =="small")
              setNavSize("large")
            else
              setNavSize("small")
          }}
        />
        <NavItem navSize={navSize} icon={FaHome} title="Home" active/>
        <NavItem navSize={navSize} icon={FaShare} title="Colabora"/>
        <NavItem navSize={navSize} icon={FaUser} title="About us"/>
        <NavItem navSize={navSize} icon={FaHandHoldingHeart} title="Donaciones"/>
      </Flex>
      <Flex flexDir="column">
        <NavItem navSize={navSize} icon={FaTwitter} itemSize="small" title="Twitter"/>
        <NavItem navSize={navSize} icon={FaYoutube} itemSize="small" title="Youtube"/>
        <NavItem navSize={navSize} icon={FaTiktok} itemSize="small" title="Tiktok"/>
      </Flex>
      <Flex
      p="5%"
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
      mb={4}
      >
        <Divider display={navSize=="small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex color="gray.400" flexDir="column" ml={4} display={navSize=="small" ? "none" : "flex"} >
          <Heading as="h3" size="sm">Pablo Ramos</Heading>
          <Text>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default SideBar