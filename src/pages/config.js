import DefaultLayouts from "../layouts/DefaultLayouts";
import About from "./About";
import Kitchen from "./Kitchen";


const config = [
    {
        component: About,
        path: '/about',
        secure: false,
        exact: true,
        layout: DefaultLayouts,
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