import React, {useState} from 'react';
import { Flex, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import {  ChevronDownIcon } from '@chakra-ui/icons';
import youtube from '../../../stratcall/src/apis/youtube';

const SearchFilters = (props)=> {
  const [mapFilter, setMapFilter] = useState("Mapa")
  const [agentFilter, setAgentFilter] = useState("Agente")
	const [videos, setVideos] = useState([])

  //Maps and agents menu list
  const valoMaps = ["Ascent", "Bind", "Breeze", "Fracture", "Haven", "Icebox", "Split"]
  const valoAgents = ["Astra", "Breach", "Brimstone", "Chamber", "Cypher", "Jett", "Kayo", "Killjoy", "Neon", "Omen", "Phoenix", "Raze", "Reyna", "Sage", "Skye", "Sova", "Viper", "Yoru"]

  //Rendering maps and agents arrays
  const mapsList = valoMaps.map((item, index)=><MenuItem key={index} onClick={(e)=>setMapFilter(e.target.innerText)}>{item}</MenuItem>)
  const agentsList = valoAgents.map((item, index)=><MenuItem key={index} onClick={(e)=>setAgentFilter(e.target.innerText)}>{item}</MenuItem>)

//Api call

const getData = async ()=>{
  //const queryString = agentFilter + " " + mapFilter
  const queryString = "bind breach"
  console.log("la query es: ", queryString)
  const response = await youtube.get('/search',{
    params: {
    q: queryString
    }
})
  setVideos(["123","456"])
  //setVideos( await response.data.items)
  console.log("response: ", response.data.items)
  console.log("el valor de videos es: ",videos)
  return await response
}
	
  return(
    <Flex w="100%" h="6vh" backgroundColor="#7A7979" justifyContent="center" alignItems="center" pos="fixed">
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
      <Button mx="5px" onClick={()=>getData()}>Filtrar</Button>
    </Flex>
  )
}
export default SearchFilters