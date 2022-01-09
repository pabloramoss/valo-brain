import React from 'react';
import { Flex, Text, Link, MenuButton, Menu, Icon } from '@chakra-ui/react'

const NavItem = ({navSize, title, icon, active, itemSize})=> {

  return(
    <Flex
      mt={5}
      flexDir='column'
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "#5A5959"}
          p={2}
          borderRadius={8}
          _hover={{textDecor: "none", backgroundColor:"#5A5959"}}
          w={navSize=="large" && "100%"}
        >
        <MenuButton w="100%">
          <Flex alignItems="center">
            <Icon as={icon} fontSize={itemSize == "small" ? "sm" : "xl"} color={active ? "white":"gray.500"} />
            <Text ml={5} display={navSize == "small" ? "none" : "flex"} color="white">{title}</Text>
          </Flex>
        </MenuButton>
        </Link>
      </Menu>
    </Flex>
  )
}
export default NavItem