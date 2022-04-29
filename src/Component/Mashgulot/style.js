import styled from "styled-components";
import mashgulot from "../../assets/img/mashgulot.png";

export const Container = styled.div`
width: 100%;
background: #272329;
padding: 85px 0px;
margin-top: 80px;
`;

export const Wrapper = styled.div`
width: 75%;
margin: 0px auto;
display: flex;
`;

export const Box = styled.div`
flex: 5;
/* margin-right:140px; */
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const Header = styled.div`
font-style: normal;
font-weight: 600;
font-size: 38px;
color: #ffffff;
`;

export const Title = styled.div`
font-style: normal;
font-weight: bold;
font-size: 18px;
color: #FFFFFF;
margin-bottom: 17px;
`;

export const Flexing = styled.div`
display: flex;
align-items: center;
margin: 8px 0px ;
`;


export const Circle = styled.div`
width: 10px;
height: 10px;
border-radius:50%;
background-color:#ffffff ;
margin-left: 10px;
`;

export const Item = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #FFFFFF;
margin-left: 10px;
`;

// img

export const Img = styled.div`
background-image: url(${mashgulot});
background-size: 100% 100%;
flex: 4;
height: 400px;
  
`;