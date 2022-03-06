import React from "react";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Card from "../components/Card";
import HomePage from "../components/HomePage"


const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <HomePage/>
            <Card/>
            <Footer/>
            <div>{children}</div>
            
        </div>

    )
}

export default AuthLayout