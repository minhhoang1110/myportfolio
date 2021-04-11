import styled from 'styled-components';
const NavBarStyle=styled.div`
    background:${(props)=>props.color.navBar.bg};
    .container{
        padding:20px 0;
    }
    .nav-bar{
        .brand-name{
            font-family: 'Londrina Solid', cursive;
            font-size:50px;
            margin-right:20px;
            a{
                color:${(props)=>props.color.navBar.text};
                &:hover{
                    text-decoration: none;
                }
            }
        }
        .nav-item{
            a{
                display:block;
                padding:20px 0;
                transition: background 0.3s;
                width: 130px;
                text-align: center;
                color:${(props)=>props.color.navBar.text};
                &:hover{
                    background:${(props)=>props.color.navBar.bgHover};
                    text-decoration: none;
                }
            }
            &:first-child{
                margin-left:0px;
            }
        }
    }
    .social{
        ul{
            list-style:none;
            li{
                color:${(props)=>props.color.navBar.text};
                margin:0 10px;
                svg{
                    max-width:unset;
                }
            }
        }
    }
`;
export default NavBarStyle;