import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icon/logo.svg'

export const Container = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: 0;
z-index: 999;
background:none ;
transition: all 0.5s;
`;

export const Wrapper = styled.div`
width: 75%;
display: flex;
align-items: center;
justify-content: space-between;
@media(max-width:1200px){
    width: 80%;
}
`;


export const Logo = styled(logo)`
cursor: pointer;
`;


export const Title = styled.a`
font-size: 16px;
letter-spacing: 0.05em;
text-transform: uppercase;
color:#ffffff;
cursor: pointer;
text-decoration: none;
@media(max-width:1400px){
    font-size: 14px;
}
`;


export const Btn = styled.div`
color: #FFFFFF;
font-size: 16px;
font-weight: normal;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
width: 180px;
height: 48%;
cursor: pointer;
`;