import React, { useState } from "react";
import {
    Box, 
    Divider, 
    Button,
    Rating
} from "@mui/material"
import Navbar from "../../components/Navbar";
import { BORDRADIUS, COLOR, FONTFAMILY, FONTS, MARGINS } from "../../constant";
import { useHistory } from "react-router-dom";


const Pricing = () => {
       const history  = useHistory()
       const [value,setValue] = useState(1)
    return(
        <Box>
            <Navbar/>
            <Box sx={{
                display:"flex",
                justifyContent:"center",
                fontFamily:FONTFAMILY.montserrat2,
                mt:MARGINS.mt5,
                fontSize:FONTS.body4,
                mb:MARGINS.mb2
            }}>
                Pricing
            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"center"
            }}>
            <Box sx={{
                boxShadow:3,
                borderRadius:BORDRADIUS.xxl,
                width:"800px",
                height:"50px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                mb:MARGINS.mb2,
                fontFamily:FONTFAMILY.montserrat
            }}>
            Quickly build an effective pricing table for your potential customers with this layout. 
            </Box>
            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"center"
            }}>
            <Box sx={{
                boxShadow:5,
                width:"200px",
                height:"250px",
                borderRadius:BORDRADIUS.xl
            }}>
                 <Box sx={{
                    position:"absolute",
                    mt:MARGINS.mt,
                    ml:MARGINS.ml2
            }}>
            <Rating readOnly value={value} max="1"/>
            </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    fontSize:FONTS.body3,
                    fontFamily:FONTFAMILY.lobster,
                    mt:MARGINS.mt3
                }}>
                    Unlimited
                </Box>
                <Box sx={{
                    width:"100px",
                    ml:MARGINS.ml3,
                    mb:MARGINS.mb2
                }}>
                <Divider/>
                </Box>
            <Box sx={{
                ml:MARGINS.ml3,
                fontFamily:FONTFAMILY.montserrat
            }}>
                US$$
            </Box>
            <Box sx={{
                fontFamily:FONTFAMILY.montserrat,
                fontSize:FONTS.body3,
                ml:MARGINS.ml6,
                mt:MARGINS.mt6,
                position:"absolute"
            }}>
                5
            </Box>
            <Box sx={{
                fontFamily:FONTFAMILY.montserrat,
                fontSize:FONTS.body1,
                ml:MARGINS.ml5,
                mt:MARGINS.mt6,
                position:"absolute"
            }}>
                50
            </Box>
            <Box sx={{
                fontFamily:FONTFAMILY.montserrat,
                fontSize:FONTS.body,
                ml:MARGINS.ml5,
                mt:MARGINS.mt7,
                position:"absolute",
                color:COLOR.yellow
            }}>
                /Month
            </Box>
            <Box sx={{
                mt:MARGINS.mt5,
                width:"100px",
                ml:MARGINS.ml3,
                mb:MARGINS.mb2
            }}>
                <Divider/>
            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"center"
            }}>
                <Button sx={{
                    color:COLOR.orange3,
                    bgcolor:COLOR.yellow,
                    borderRadius:BORDRADIUS.xl,
                    mb:MARGINS.mb3
                }} onClick={() => {
                    history.push("/login")
                }}>
                    Get Started
                </Button>
            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"center"
            }}>
                <Box sx={{
                    color:COLOR.white,
                    bgcolor:COLOR.pink,
                    borderRadius:BORDRADIUS.sm,
                    position:"absolute",
                    width:"150px",
                    justifyContent:"center",
                    display:"flex",
                    fontFamily:FONTFAMILY.montserrat,
                    boxShadow:"9"
                }}>
                    Most Popular
                </Box>
            </Box>
            </Box>
            </Box>
        </Box>
    )
}
export default Pricing