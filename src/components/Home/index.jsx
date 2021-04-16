import React,{useState} from "react";
import HomeStyle from "./style";
import {colors} from "../../style/color";
import {ImageSrc} from "../../constants/config";
const Home=(props)=>{
    const [loading, setLoading] = useState(true);
    const imageToLoad = new Image();
    imageToLoad.src = ImageSrc.home;
    imageToLoad.onload = () => {
        setLoading(false);
    };
    if(loading)return <div className="loading flex a-center j-center">Loading...</div>
    return (
        <HomeStyle color={colors} backgroundImage={ImageSrc.home}>
            <div className="placeholder-bg"></div>
            <div className="home-content flex a-center">
                <div className="container">
                    <div className="greeting">Hi, I'm HoangTM.</div>
                    <div className="my-title">I'm Front-end Developer.</div>
                </div>
            </div>
        </HomeStyle>
    )
}
export default Home;