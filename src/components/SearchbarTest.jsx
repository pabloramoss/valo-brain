import React, {useState, useEffect} from 'react';
import {
  Input,
  Flex,
  Button,
  InputGroup,
  FormControl,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import axios from "axios"


const SearchbarTest = ()=> {
  const [usuarios, setUsuarios] = useState([])
  const [tablaUsuarios, setTablaUsuarios] = useState([])
  const [busqueda, setBusqueda]=useState("")

  const peticionGet=async()=>{
    await axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
      console.log(response.data)
      setUsuarios(response.data)
      setTablaUsuarios(response.data)
    }).catch(error=>{
      console.log(error)
    })
  }
  useEffect(()=>{peticionGet()}, [])
  const handleChange = (e)=>{
    setBusqueda(e.target.value)
    console.log(e.target.value)
    filtrar(e.target.value)
  }
  const handleSubmit = e =>{
    e.preventDefault()
    peticionGet()
  }
  const filtrar = (terminoBusqueda)=>{
    var resultadosBusqueda = tablaUsuarios.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ){
        return elemento
      }
    })
    setUsuarios(resultadosBusqueda)
  }

  return(
    <Flex justifyContent="center" pt="100px">
    <form onSubmit={handleSubmit}>
        <FormControl>
            <InputGroup>
                <Input color="white" type='text' onChange={handleChange} placeholder="Buscar" />
                <Button type="submit"><SearchIcon w={6} h={6} /></Button>
            </InputGroup>            
        </FormControl>
    </form>
</Flex>
  )
}
export default SearchbarTest


//SearchBar para v2.0//
/*

que el onChange en el input llame a la funcion handleChange
y que handleChange sea
const handleChange = ()=>{
  setBusqueda(e.target.value)
  filtrar(e.target.value)
  console.log(e.target.value)
}

const filtrar = (terminoBusqueda)=>{
    var resultadosBusqueda = tablaUsuarios.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ){
        return elemento
      }
    })
    setUsuarios(resultadosBusqueda)
  }
}

*/