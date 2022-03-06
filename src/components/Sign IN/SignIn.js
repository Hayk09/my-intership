import React from "react";
import {useForm} from "react-hook-form"
import "./SignIn.scss"
import HomePagePhoto from "../Assets/HomePage.png"
import MenuButtonIcon from "../Assets/Group2.png"


const SignIn = () => {  
     const { register, handleSubmit, formState: {errors}} = useForm()
      const onSubmit = (data) => {
          try{
              window.localStorage.setItem("people" , JSON.stringify(data))
          }catch (error){
              alert("your login is not correct", error)
          }
      }
    return(
       <div>   
       <img src={MenuButtonIcon} className="MenuButtonIcon"/>
       <p className="WD1"><b>WD</b></p>
       <p className="About">About</p>
       <p className="Concat">Concat</p>
       <p className="Delivery">Delivery</p>
       <p className="Signin"><b>Sign In</b></p> 
       <form onSubmit={handleSubmit(onSubmit)}>
           <p className="Name">Name</p>
           <input  type="Name" {...register("Name",{ required: true})} className="name" />
           <p className="lastname">LastName</p>
           <input type="LastName" {...register("LastName",{ required: true})} className="LastName"/>
           <p className="Email">EmailAdress</p>
           <input type="email" {...register("Email",{required:true})} className="email"/>
           <p className="Password">Password</p>
           <input type="password" {...register("Password",{required:true})} className="password"/>
           <button type="submit" className="SignIn">Sign In</button>
           
       </form> 
       <img src={HomePagePhoto} className="HomePage"/>
       
      
       </div>
    )
}

export default SignIn