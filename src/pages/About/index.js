import React from 'react'
import { Box, Button } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';


const About = () => {
  return (
    < Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '600px'

    }}>
    <Button>
    add
    <AdbIcon/>
  

    </Button>
    
    </Box>
  )
}

export default About