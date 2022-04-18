import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import {paths} from "./config";
const routes=[
    {
        path:paths.aboutMe,
        component:AboutMe,
    },
    {
        path:paths.home,
        component:Home,
    },
]
export default routes;