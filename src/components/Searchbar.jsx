import React, {useState} from 'react';
import {
  InputGroup,
  Flex,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = ()=> {
const [search, setSearch] = useState(null)
const handleChange = e => setSearch(e.target.value)
const handleSubmit = e => {
  e.preventDefault();
  
}


  return(
    <Flex justifyContent="center" pt="100px">
                <form onSubmit={()=>handleSubmit()}>
                    <FormControl>
                        <InputGroup>
                            <Input color="white" type='text' onChange={()=>handleChange()} placeholder="Buscar" />
                            <Button type="submit"><SearchIcon w={6} h={6} /></Button>
                        </InputGroup>
                    </FormControl>
                </form>
            </Flex>
  )
}
export default SearchBar