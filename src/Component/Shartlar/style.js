import styled from "styled-components";
import shartlar from '../../assets/img/shartlar.png'

export const Container = styled.div`
width: 75%;
margin: 84px auto;
`;


export const Header = styled.div`
font-style: normal;
font-weight: 600;
font-size: 38px;
line-height: 52px;
text-align: center;
color: #272329;
margin-bottom: 48px;
`;


export const Wrapper = styled.div`
display: flex;
/* align-items: center; */
`;

export const Img = styled.div`
background-image: url(${shartlar});
background-size: 100% 100%;
flex: 1;
height: 480px;
`;

export const Box = styled.div`
flex: 1;
margin-left: 130px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;


export const Li = styled.li`
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;
color: #272329;
`;
