import styled from "styled-components";
import missiya from '../../assets/img/missiya.png'
import {ReactComponent as square} from '../../assets/icon/square.svg'

export const Container = styled.div`
width: 75%;
margin:85px auto;  
display: flex;
`;


export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media(max-width:1500px){
    margin-right: 80px;
}  
`;


export const Img = styled.div`
background-image: url(${missiya});
background-size: 100% 100%;
flex: 1;
height: 480px;
`;

export const Header = styled.div`
font-style: normal;
font-weight: 600;
font-size: 38px;
color: #272329;
@media(max-width:1250px){
  font-size: 32px;
}  
`;

export const Flexing = styled.div`
  display: flex;
`;

export const Square = styled(square)`
  margin-right:24px;
`;


export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 24px;
color: #272329;  
line-height: 35px;

`;

export const Text = styled.div`
font-style: normal;
font-weight: normal;
font-size: 19px;
color: #272329;  
width: 90%;
line-height: 24px
`;