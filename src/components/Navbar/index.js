import React from 'react'
import { Box } from '@mui/material'
import {COLOR,BORDRADIUS,FONTS} from '../../constant/index'
// import MenuButtonIcon from "../Assets/Group 2.png"

const Navbar = () => {
 
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor:COLOR.brown ,
        height: '90px',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: BORDRADIUS.lg
      }}
    >
       <Box>
         
       </Box>
    </Box>
  )
}

export default Navbar