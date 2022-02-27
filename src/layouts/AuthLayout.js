import React from "react";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";


const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer/>
        </div>

    )
}

export default AuthLayout