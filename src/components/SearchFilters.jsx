import React, {useState} from 'react';
import { Flex, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import {  ChevronDownIcon } from '@chakra-ui/icons';

const SearchFilters = ()=> {
  const [mapFilter, setMapFilter] = useState("Mapa")
  const [agentFilter, setAgentFilter] = useState("Agente")
  const valoMaps = ["Ascent", "Bind", "Breeze", "Fracture", "Haven", "Icebox", "Split"]
  const valoAgents = ["Astra", "Breach", "Brimstone", "Chamber", "Cypher", "Jett", "Kayo", "Killjoy", "Neon", "Omen", "Phoenix", "Raze", "Reyna", "Sage", "Skye", "Sova", "Viper", "Yoru"]

  const mapsList = valoMaps.map((item, index)=><MenuItem key={index} onClick={(e)=>setMapFilter(e.target.innerText)}>{item}</MenuItem>)
  const agentsList = valoAgents.map((item, index)=><MenuItem key={index} onClick={(e)=>setAgentFilter(e.target.innerText)}>{item}</MenuItem>)

  return(
    <Flex w="100%" h="6vh" backgroundColor="#7A7979" justifyContent="center" alignItems="center">
      <Menu>
        <MenuButton mx="5px" as={Button} rightIcon={<ChevronDownIcon />}>
        {mapFilter}
        </MenuButton>
        <MenuList>
          {mapsList}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton mx="5px" as={Button} rightIcon={<ChevronDownIcon />}>
        {agentFilter}
        </MenuButton>
        <MenuList>
          {agentsList}
        </MenuList>
      </Menu>
      <Button mx="5px">Filtrar</Button>
    </Flex>
  )
}
export default SearchFilters