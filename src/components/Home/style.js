import styled from "styled-components";
const HomeStyle=styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 115px);
    position:relative;
    .placeholder-bg{
        position: absolute;
        background: ${props=>props.color.home.placeholderBg};
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
    .home-content{
        position: absolute;
        width: 100%;
        height: 100%;
        color:${props=>props.color.home.text};
        .container{
            width:100%;
            .greeting{
                font-family: 'Londrina Solid',cursive;
                font-size: 100px;
            }
            .my-title{
                font-size:40px;
            }
        }
    }
`;
export default HomeStyle;