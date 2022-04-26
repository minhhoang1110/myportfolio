import React from "react";
import NavBarStyle from "./style";
import {colors} from "../../style/color";
import {paths} from "../../constants/config";
import {ImageSrc} from "../../constants/config";
import { useLocation } from "react-router-dom";
const NavBar=(props)=>{
    const currentURLPathObj=useLocation()
    const {pathname}=currentURLPathObj
    const getActiveClassOfNavMenuItem=(path)=>{
        return pathname===path?"active":""
    }
    return (
        <NavBarStyle color={colors}>
            <div className="container flex a-center j-between">
                <div className="logo">
                    <a href={`${paths.home}`}>
                        <img src={`${ImageSrc.logo}`} alt="" />
                    </a>
                </div>
                <div className="nav-menu-container">
                    <ul className="flex a-center">
                        <li>
                            <a className={getActiveClassOfNavMenuItem(paths.home)} href={`${paths.home}`}>Home</a>
                        </li>
                        <li>
                            <a href="/">My Intro</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="search-keyword-container">
                    <input type="text" placeholder="Enter Keyword..."/>
                    <button>Search</button>
                </div>
            </div>
        </NavBarStyle>
    )
}
export default NavBar;