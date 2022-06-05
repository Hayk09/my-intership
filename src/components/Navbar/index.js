import React from 'react'
import { 
  Box,
  Button,
} from '@mui/material'
import {COLOR,FONTS,FONTFAMILY,MARGINS,BORDRADIUS} from '../../constant/index'
import { CssBaseline } from '@mui/material'
import { useHistory } from 'react-router-dom'


const Navbar = () => {
  const history = useHistory()
  return (
    <Box>
      <CssBaseline/>
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        boxShadow:"3",
        height:"90px",
        alignItems:"center"
      }}>
        <Box sx={{
           fontFamily:FONTFAMILY.montserrat,
           fontSize:FONTS.body3
        }}>Great</Box>
        <Box sx={{
           fontFamily:FONTFAMILY.montserrat,
           fontSize:FONTS.body3,
           color:COLOR.yellow
        }}>STAR</Box>
        <Box sx={{
          fontFamily:FONTFAMILY.lobster,
          fontSize:FONTS.smoll,
          mt:MARGINS.mt
        }}>
          GS
        </Box>
        <Button sx={{
          color:COLOR.black,
          width:"130px"
        }}>
          Launch
        </Button>
        <Button sx={{
          color:COLOR.black,
          width:"130px"
        }}>
          Manage
        </Button>
        <Button sx={{
          color:COLOR.black,
          width:"130px"
        }}>
          Pricing
        </Button>
        <Button sx={{
            color:COLOR.amber,
            bgcolor:COLOR.yellow3,
            borderRadius:BORDRADIUS.xxl
        }} variant="text" onClick={() => (
          history.push("/login")
        )}>
          LOG IN
        </Button>
      </Box>
    </Box>
  )
}

export default Navbar