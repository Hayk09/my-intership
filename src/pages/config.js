// import DefaultLayouts from "../layouts/DefaultLayouts";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "./HomePage";


const config = [
    {
        component: HomePage,
        path: '/',
        secure: false,
        exact: true,
        layout: AuthLayout,
    }
]

export default config;