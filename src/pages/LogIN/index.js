import React from "react";
import { 
    Box, 
    Button,
    TextField,
    Tooltip,
    ImageListItem,
    Link
 } from "@mui/material";
 import {COLOR,FONTS,FONTFAMILY,BORDRADIUS,MARGINS} from '../../constant/index'
 import UndoIcon from '@mui/icons-material/Undo';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

 const LogIn = () => {
     const history = useHistory()
     const { register, handleSubmit, formState: { errors }} = useForm()
     const onSubmit = (data) => {
         try{
             window.localStorage.setItem("user" , JSON.stringify(data))
             if(data.Email !== data.tryEmail ){
                 console.log("false");
             }else{
                 console.log("true");
             }
         }catch (errors){
             alert("your login is not correct", errors)
         }
        }
     return(
         <Box>
             <Box sx={{
                 display:"flex",
                 justifyContent:"center"
             }}>
             <Box sx={{
                 color:COLOR.grey,
                 fontFamily:FONTFAMILY.lobster,
                 fontSize:FONTS.body3
             }}>
                 G
             </Box>
             <Box sx={{
                 color:COLOR.yellow,
                 fontFamily:FONTFAMILY.lobster,
                 fontSize:FONTS.body3
             }}>
                 S
             </Box>
             </Box>
             <Box sx={{
                 display:"flex",
                 justifyContent:"center",
             }}>
            <Tooltip title="Go to the Homepage">
             <Button sx={{
                 color:COLOR.orange
             }} onClick={() => (
                 history.push("/")
             )}>
                 <UndoIcon/>
             </Button>
             </Tooltip>
             </Box>
             <Box sx={{
                 fontFamily:FONTFAMILY.montserrat2,
                 fontSize:FONTS.body4,
                 color:COLOR.grey,
                 display:"flex",
                 justifyContent:"center",
                 mb:MARGINS.mb
             }}>
             Sign Up
             </Box>
             <form onSubmit={handleSubmit(onSubmit)}>
                 <Box sx={{
                     display:"flex",
                     justifyContent:"center"
                 }}>
             <Box sx={{
                 boxShadow:"8",
                 borderRadius:BORDRADIUS.xxl,
                 width:"300px",
                 height:"300px",
                 bgcolor:COLOR.yellow2,
                 mb:MARGINS.mb2
             }}>
                 <Box sx={{
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center"
                 }}>
                     <TextField  label="Type Email" variant="standard" {...register("Email")} />
                 </Box>
                 <Box sx={{
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center"
                 }}>
                     <TextField label="Type your Email again" variant="standard" {...register("tryEmail")}/>
                 </Box>
                 <Box sx={{
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center"
                 }}>
                     <TextField label="Type Password" variant="standard" {...register("Password")}/>
                 </Box>
                 <Box sx={{
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center",
                     mb:MARGINS.mb2
                 }}>
                     <TextField label="Type your Password again" variant="standard" {...register("tryPassword")}/>
                 </Box>
                 <Box sx={{
                     display:"flex",
                     justifyContent:"center"
                 }}>
             <Button type="submit" sx={{
                 color:COLOR.orange2
             }}>Submit</Button>
             </Box>
             </Box>
             </Box>
             </form>
             <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=1557999815&extra_1=s%7Cc%7C294723539698%7Ce%7Cfacebook%7C&placement=&creative=294723539698&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1557999815%26adgroupid%3D58938663837%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D9070053%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwqPGUBhDwARIsANNwjV5Z5JjE-pwWizBSqvMG9Ctos9j26aandqM2xcDwj260wKgWpS4O76UaAjeFEALw_wcB"
              underline="none"
             >
             <Box sx={{
                 display:"flex",
                 justifyContent:"center",
                 mb:MARGINS.mb2
             }}>
             <Box sx={{
                 display:"flex",
                 justifyContent:"flex-start",
                 boxShadow:"5",
                 width:"300px",
                 borderRadius:BORDRADIUS.xxl,
                 bgcolor:COLOR.blue
             }} >
             <ImageListItem  sx={{
                 width:"50px",
             }} >
                <img src={"	https://www.pngplay.com/wp-content/uploads/9/Facebook-Logo-Free-PNG.png"} />
             </ImageListItem>
              <Box sx={{
                  alignItems:"center",
                  fontFamily:FONTFAMILY.montserrat,
                  color:COLOR.white,
                  mt:MARGINS.mt3,
                  ml:MARGINS.ml
              }}>
                  Continue With FaceBook
              </Box>
              </Box>
              </Box>
              </Link>
              <Link href="https://www.google.com/" underline="none">
              <Box sx={{
                  justifyContent:"center",
                  display:"flex"
              }}>
              <Box sx={{
                 display:"flex",
                 justifyContent:"flex-start",
                 boxShadow:"5",
                 width:"300px",
                 borderRadius:BORDRADIUS.xxl,
                 bgcolor:COLOR.WhiteBlue,
                 mb:MARGINS.mb2
             }}>
              <ImageListItem  sx={{
                 width:"50px",
             }}>
                <img src={"https://www.techora.net/wp-content/uploads/2017/10/Google-Chrome-for-MAC.png"}/>
             </ImageListItem>
              <Box sx={{
                  alignItems:"center",
                  fontFamily:FONTFAMILY.montserrat,
                  mt:MARGINS.mt3,
                  ml:MARGINS.ml,
              }}>
                  Continue With Google
             </Box>
             </Box>
             </Box>
             </Link>
             <Link href="https://www.instagram.com/" underline="none">
              <Box sx={{
                  justifyContent:"center",
                  display:"flex"
              }}>
              <Box sx={{
                 display:"flex",
                 justifyContent:"flex-start",
                 boxShadow:"5",
                 width:"300px",
                 borderRadius:BORDRADIUS.xxl,
                 bgcolor:COLOR.pink
             }}>
              <ImageListItem  sx={{
                 width:"50px",
             }}>
                <img src={"https://www.pngmart.com/files/21/Instagram-Logo-PNG-File.png"}/>
             </ImageListItem>
              <Box sx={{
                  alignItems:"center",
                  fontFamily:FONTFAMILY.montserrat,
                  mt:MARGINS.mt3,
                  ml:MARGINS.ml,
                  color:COLOR.white
              }}>
                  Continue With Instagram
             </Box>
             </Box>
             </Box>
             </Link>
         </Box>
     )
 }

 export default LogIn