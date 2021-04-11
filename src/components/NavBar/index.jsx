import React from "react";
import NavBarStyle from "./style";
import {colors} from "../../style/color";
import {paths} from "../../constants/config";
const NavBar=(props)=>{
    return (
        <NavBarStyle color={colors}>
            <div className="container flex a-center j-between">
                <div className="nav-bar flex a-center">
                    <div className="brand-name"><a href={paths.home}>HoangTM</a></div>
                    <div className="nav-item"><a href={paths.blogPost}>Blog Post</a></div>
                    <div className="nav-item"><a href={paths.project}>Project</a></div>
                    <div className="nav-item"><a href={paths.aboutMe}>About Me</a></div>
                </div>
                <div className="social">
                    <ul className="flex a-center">
                        <li><span uk-icon="icon:facebook;ratio:1.3"></span></li>
                        <li><span uk-icon="icon:linkedin;ratio:1.3"></span></li>
                        <li><span uk-icon="icon:github;ratio:1.3"></span></li>
                    </ul>
                </div>
            </div>
        </NavBarStyle>
    )
}
export default NavBar;