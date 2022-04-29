import styled from "styled-components";
import mashgulot from '../../assets/img/mashgulot.png'

export const Container = styled.div`
background: #272329;
padding: 80px 0px;
`;


export const Header = styled.div`
font-style: normal;
font-weight: 600;
font-size: 42px;
text-align: center;
color: #FFFFFF;
`;

export const Item = styled.div`
font-style: normal;
font-weight: 300;
font-size: 17px;
text-align: center;
letter-spacing: 0.005em;
color: #FFFFFF;
margin: 8px 0px 48px 0px;
`;

export const Flexing = styled.div`
display: flex;
flex-wrap: wrap;
width: 75%;
margin: 0px auto;
justify-content: center;
`;

export const Img = styled.div`
background-image: url(${mashgulot});
background-size: 100% 100%;
width: 310px;
height: 200px;
border-radius: 8px;
margin: 15px;
`;