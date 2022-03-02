import DefaultLayouts from "../layouts/DefaultLayouts";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "./HomePage";
import About from "./About";
import Kitchen from "./Kitchen";



const config = [
    {
        component: HomePage,
        path: '/',
        secure: false,
        exact: true,
        layout: AuthLayout,
    },
    {
        component: About,
        path: '/about',
        secure: false,
        exact: true,
        layout: AuthLayout,
    },
    {
        component: Kitchen,
        path: '/kitchen',
        secure: false,
        exact: true,
        layout: DefaultLayouts,
    },
 
]

export default config;