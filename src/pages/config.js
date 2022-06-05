import DefaultLayouts from "../layouts/DefaultLayouts";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "./HomePage";
import LogIn from "./LogIN";

const config = [
    {
        component: HomePage,
        path: '/',
        secure: false,
        exact: true,
        layout: AuthLayout,
    },
    {
        component: LogIn,
        path: '/login',
        secure: false,
        exact: true,
        layout: DefaultLayouts,
    }
]

export default config;