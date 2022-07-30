import DefaultLayouts from "../layouts/DefaultLayouts";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "./HomePage";
import LogIn from "./LogIN";
import About from './About'
import { Tools } from "./Tools";

const config = [
  {
    component: HomePage,
    path: "/",
    secure: false,
    exact: true,
    layout: AuthLayout,
  },
  {
    component: LogIn,
    path: "/login",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
  {
    component: About,
    path: "/about",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
  {
    component: Tools,
    path: "/tools",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
];

export default config;
