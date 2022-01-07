import React, {useState} from 'react';
import {motion} from "framer-motion"
import { Flex} from '@chakra-ui/react'



const SideBarTest = ()=> {
  const variants = {
    open: {opacity: 1, x:0,},
    closed: {opacity: 0, x:"100%"}
  }
  const [show, setShow] = useState(false)


  return(
    <Flex justifyContent="flex-end" h="400px" w="200px" backgroundColor="red">
      <motion.nav
      animate={show ? "open" : "close"}
      variants={variants}
      transition={{duration: 0.5}}
      >
        <motion.div>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.button
      onClick={()=> setShow(show => !show)}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      >
        Menu
      </motion.button>
    </Flex>
  )
}
export default SideBarTest