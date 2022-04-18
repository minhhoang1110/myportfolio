import styled from 'styled-components';
const NavBarStyle=styled.div`
    background:none;
    .container{
        padding:8px 0;
        .logo{
            border: 1px solid ${(props)=>props.color.navBar.primaryBorder};
            img{
                width:50px;
                heigth:50px;
            }
        }
    }
`;
export default NavBarStyle;