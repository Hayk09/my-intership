import React from "react";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"



const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
           
            <Footer/>
            <div>{children}</div>
            
        </div>

    )
}

export default AuthLayout