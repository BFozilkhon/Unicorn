import styled from "styled-components";
import {ReactComponent as document} from '../../../assets/icon/document.svg'

export const Container = styled.div`
background: #272329;
height: 400px;
margin-top: 104px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 0px 10px;
`;


export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 28px;
color: #ffffff;
@media(max-width:1400px){
    line-height: 35px;
    font-size: 24px;
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
height: 50px;
text-transform: uppercase;
margin-top: 50px;
@media(max-width:1400px){
    width: 160px;
height: 42px;
font-size: 12px;
margin-top: 30px;
}
`;

export const Document = styled(document)`
margin:0px 40px;
`;