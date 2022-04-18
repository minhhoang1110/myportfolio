import React from "react";
import NavBarStyle from "./style";
import {colors} from "../../style/color";
import {paths} from "../../constants/config";
import {ImageSrc} from "../../constants/config";
const NavBar=(props)=>{
    return (
        <NavBarStyle color={colors}>
            <div className="container flex a-center j-between">
                <div className="logo">
                    <img src={`${ImageSrc.logo}`} alt="" />
                </div>
            </div>
        </NavBarStyle>
    )
}
export default NavBar;