import React from "react";
import {
    Box, 
} from "@mui/material"
import { COLOR, FONTFAMILY, FONTS, MARGINS } from "../../constant";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
 



const AdminResponsiveText = () => {
    return(
        <Box display={{ sm: "hidden", md: "none" }} sx={{
            justifyContent:"center"
        }}>
           <Box sx={{
             justifyContent:"center",
             display:"flex",
             mt:MARGINS.mt8,
             fontSize:FONTS.body4,
             fontFamily:FONTFAMILY.montserrat
           }}>
            Welcome
            <AdminPanelSettingsIcon sx={{
                color:COLOR.blue,
            }}/>
            <Box sx={{
            fontFamily:FONTFAMILY.montserrat,
            fontSize:FONTS.body2,
            display:"flex",
            justifyContent:"center"
           }}>
           Administrator
           </Box>
           </Box>
        </Box>
    )
}
export default AdminResponsiveText