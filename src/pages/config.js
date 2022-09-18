import DefaultLayouts from "../layouts/DefaultLayouts";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "./HomePage";
import LogIn from "./LogIN";
import About from './About'
import { Tools } from "./Tools";
<<<<<<< HEAD
import SignIN from "./SignIN";
import Add from "./Add"
=======
import SignUP from "./SignUP";
>>>>>>> 194c1f0f931d7827d6542b3d6cb86e777c0fdfbd


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
  {
    component: SignUP,
    path: "/signUp",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  },
  {
    component: Add,
    path: "/Add",
    secure: false,
    exact: true,
    layout: DefaultLayouts,
  }
];

export default config;
