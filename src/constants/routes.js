import Home from "../components/Home";
import BlogPost from "../components/BlogPost";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import {paths} from "./config";
const routes=[
    {
        path:paths.blogPost,
        component:BlogPost,
    },
    {
        path:paths.aboutMe,
        component:AboutMe,
    },
    {
        path:paths.project,
        component:Project,
    },
    {
        path:paths.home,
        component:Home,
    },
]
export default routes;