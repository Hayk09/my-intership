import React from "react";
import {
    Box
} from "@mui/material"
import { FONTFAMILY, FONTS, MARGINS } from "../../constant";



const HPRT = () => {
    //HPRT - Home Page Responsive Text
    return(
        <Box>
             <Box display={{ sm: "hidden", md: "none" }} sx={{
            justifyContent:"center",
             }}>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    mt:MARGINS.mt9,
                    fontSize:FONTS.body3,
                    fontFamily:FONTFAMILY.montserrat2
                }}>
                   Welcome To The 
                   <Box sx={{
                    fontFamily:FONTFAMILY.lobster,
                    fontSize: FONTS.smoll,
                    mt: MARGINS.mt5,
                   }}>
                    GS
                   </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HPRT