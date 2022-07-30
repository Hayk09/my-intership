import React, { useEffect, useState } from "react";
import {
    Box,
    Collapse,
    Rating
} from "@mui/material"
import { COLOR, FONTFAMILY, FONTS, MARGINS } from "../../constant";
import StarIcon from '@mui/icons-material/Star';
import HPRT from "../HomePageResponsiveText";



const HomePage = () => {
    const [checked,setChecked] = useState(false)
    useEffect(() => {
        setChecked(true);
    },[])
    return(
        <Box>
           <HPRT/>
           <Box display={{ xs: "none", md: "hidden" }} sx={{
            justifyContent:"center"
           }}>
            <Box sx={{
               display:"flex",
               justifyContent:"center",    
               alignItems:"center",
               fontFamily:FONTFAMILY.montserrat2,
               fontSize:FONTS.body4,
               mt:MARGINS.mt9 
            }}>
               <Box>
                  Welcome
                  To The Great
                  <Box sx={{
                    color:COLOR.yellow,
                    display:"flex",
                    fontFamily:FONTFAMILY.montserrat,
                    justifyContent:"center"
                  }}>STAR</Box>
               </Box>
               </Box>
               </Box>
               <Collapse 
                in={checked}
                  { ...(checked ? {timeout:1000}: {})}
               >
                <Box sx={{
                  display:"flex",
                  justifyContent:"center",
                }}>
                   <Rating
                     readOnly
                     value="5"
                     emptyIcon={<StarIcon style={{ opacity: 0.55 }}  />}
                   />

                </Box>
               </Collapse>
        </Box>
    )
}
export default HomePage