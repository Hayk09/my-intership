import React from "react";
import {
    Box, TextField

} from "@mui/material"
import Navbar from "../../components/Navbar";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {MARGINS,FONTFAMILY,FONTS,COLOR} from "../../constant"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CameraIcon from '@mui/icons-material/Camera';
const User = () => {
// const UPLOAD_BUTTON = document.getElementById("upload-button");
// const FILE_INPUT = document.querySelector("input[type=file]");
// const AVATAR = document.getElementById("avatar");

// UPLOAD_BUTTON.addEventListener("click", () => FILE_INPUT.click());

// FILE_INPUT.addEventListener("change", event => {
//   const file = event.target.files[0];

//   const reader = new FileReader();
//   reader.readAsDataURL(file);

//   reader.onloadend = () => {
//     AVATAR.setAttribute("aria-label", file.name);
//     AVATAR.style.background = `url(${reader.result}) center center/cover`;
//   };
// });
     const obj = {
        Name:"poxos",
        LastName:"poxsyan",
        password:"pox"
     }
  const history = useHistory()
  const { register, handleSubmit, } = useForm({
    defaultValues:obj
  })
   
    const ListUser = JSON.parse(window.localStorage.getItem("user")) 
    console.log(ListUser);

  const onSubmit = (data) => {
      console.log(data)
   }
  
 const Countrys = [
    {
        a:"Armenia",
        b:"USA"
    }
 ]  
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
           <Box sx={{
            display:"flex",
            justifyContent:"center",
           }}>
           <TextField type="file" name="image" id="image" accept="image/*" sx={{
            width:"120px",
           }}/>
           </Box>
           <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
           }}>
                <Box sx={{
                    width:"650px",
                    height:"305px",
                    boxShadow:"3",
                    borderRadius:"95px"
                }}>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"start"
                    }}>
                    <Box id="preview">
                        <Box id="avatar" sx={{
                            bgcolor: COLOR.yellow3 ,
                            height: "200px",
                            width: "200px",
                            borderRadius: "50%",
                            boxShadow:" 0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
                              transition: "all ease 0.2s",
                             "&:hover":{
                                transform: "translateY(-5px)",
                                boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
                                 },
                        }}><CameraIcon sx={{
                            color:COLOR.yellow2
                        }}/></Box>
                   </Box> 
                   </Box>
                   <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                        mt:MARGINS.mt10
                    }}>
                        <TextField label="Type Your Name" variant="standard" {...register("Name")} type="text" />
                    </Box>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                    }}>
                        <TextField label="Type Your LastName " variant="standard" {...register("LastName")} type="text" />
                    </Box>
                    <Box sx={{
                       display:"flex",
                       justifyContent:"center", 
                    }}>
                        <TextField label="Type when you were born" variant="standard" {...register("password")} type="month" InputLabelProps={{
                           shrink: true,
                           }}
                           sx={{
                            width:"200px"
                           }}/>
                    </Box>
                   </form>
                      </Box>
                     
           </Box>
           </Box>
        </Box>
    )
}
export default User