import React,{useState} from "react";
import {
    Box, 
} from "@mui/material"
import Navbar from "../../components/Navbar";
import { COLOR, FONTFAMILY, FONTS, MARGINS } from "../../constant";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminResponsiveText from "../AdminResponsiveText";




const Admin = () => {

    return(
        <Box>
           <Navbar/>
           <AdminResponsiveText />
           <Box display={{ xs: "none", md: "hidden" }} sx={{
            justifyContent:"center"
           }}>
           <Box sx={{
             justifyContent:"center",
             display:"flex",
             mt:MARGINS.mt8,
             fontSize:FONTS.body4,
             fontFamily:FONTFAMILY.montserrat
           }}>
            Welcome Administrator
            <AdminPanelSettingsIcon sx={{
                color:COLOR.blue
            }}/>
           </Box>
           </Box>
        </Box>
    )
}
export default Admin