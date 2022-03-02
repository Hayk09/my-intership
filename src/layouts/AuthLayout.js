import React from "react";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Card from "../components/Card";


const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Card/>
            <Footer/>
            <div>{children}</div>
            
        </div>

    )
}

export default AuthLayout