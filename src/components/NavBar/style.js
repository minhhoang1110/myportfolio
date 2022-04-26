import styled from 'styled-components';
const NavBarStyle=styled.div`
    background:${(props)=>props.color.navBar.bg};
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
    .container{
        padding:8px 0;
        .logo{
            border: 1px solid ${(props)=>props.color.navBar.primaryBorder};
            img{
                width:50px;
                heigth:50px;
            }
        }
        .nav-menu-container{
            ul{
                li{
                    padding:0 12px;
                    a{
                        color:${(props)=>props.color.navBar.text};
                        &.active{
                            color:${(props)=>props.color.navBar.activeText};
                        }
                    }
                }
            }
        }
        .search-keyword-container{
            input{
                font-size: 15px;
                border-radius: 30px 0 0 30px;
                background: ${(props)=>props.color.navBar.bg};
                padding: 8px 15px;
                color: ${(props)=>props.color.navBar.inputText};
                border: 2px solid ${(props)=>props.color.navBar.inputBorder};
                border-right: none;
            }
            button{
                border-radius: 0 30px 30px 0;
                padding: 8px 16px;
                font-size: 15px;
                color: ${(props)=>props.color.navBar.bg};
                font-weight: 600;
                border: 2px solid ${(props)=>props.color.navBar.activeText};
                background: ${(props)=>props.color.navBar.activeText};
                cursor:pointer;
            }
        }
    }
`;
export default NavBarStyle;