import React from "react";
import {
    Box, 
} from "@mui/material"
import Navbar from "../../components/Navbar";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {MARGINS,FONTFAMILY,FONTS,COLOR} from "../../constant"

const User = () => {
    return(
        <Box>
           <Navbar/>
           <Box>
           <Box sx={{
             justifyContent:"center",
             display:"flex",
             mt:MARGINS.mt8,
             fontSize:FONTS.body4,
             fontFamily:FONTFAMILY.montserrat
           }}>
            Welcome User
            <SupervisedUserCircleIcon sx={{
                color:COLOR.blue
            }}/>
           </Box>
           </Box>
        </Box>
    )
}
export default User