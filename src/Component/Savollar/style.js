import styled from "styled-components";

export const Header = styled.div`
font-style: normal;
font-weight: 600;
font-size: 38px;
line-height: 52px;
text-align: center;
color: #272329;  
padding-top: 120px;
`;


export const Flexing = styled.div`
display: flex;
  width: 60%;
  margin: 0px auto;
  justify-content: space-between;
  margin-top: 48px;
  @media(max-width:1235px){
   width: 80%;
  }
`;

export const Item = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 26px;
color: #272329;
padding: 0px 15px 8px 15px;
cursor: pointer;
transition: all 0.1s;
opacity: 0.7;
`;


export const Wrapper = styled.div`
width: 75%;
margin: 47px auto 0px auto;
display: flex;  
`;

export const Box = styled.div`
flex: 1;
`;

export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 18px;
color: #272329;
`;


export const Word = styled.div`
font-style: normal;
font-weight: normal;
font-size: 17px;
color: #272329;
line-height: 30px ;
margin: 15px 0px 20px 0px;
width: 80%;
`;