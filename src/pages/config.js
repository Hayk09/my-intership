import DefaultLayouts from "../layouts/DefaultLayouts";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "./HomePage";
import LogIn from "./LogIN";
import Pricing from "./Pricing";
import SignIn from "./SignIN";
import Admin from "./Admin";
import User from "./User";

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
},
{
    component: SignIn,
    path: '/signIn',
    secure: false,
    exact: true,
    layout: DefaultLayouts,
},
{
    component: Pricing,
    path: '/pricing',
    secure: false,
    exact: true,
    layout: DefaultLayouts,
},
{
    component: User,
    path: '/user',
    secure: false,
    exact: true,
    layout: DefaultLayouts,
},
{
    component: Admin,
    path: '/admin',
    secure: false,
    exact: true,
    layout: DefaultLayouts,
}
];

export default config;
