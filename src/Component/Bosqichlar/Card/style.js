import styled from "styled-components";

export const Box = styled.div`
  width: 400px;
  display: flex;
  margin-bottom: 40px;
  margin: 25px;
`;

export const Header = styled.div`
font-style: normal;
font-weight: 900;
font-size: ${({small})=> small ?'27px':'48px'};
color: #FFFFFF;  
margin-right: ${({small})=> !small && '16px'};
`;


export const Item = styled.div`
font-style: normal;
font-weight: normal;
font-size: 15px;
color: #FFFFFF;  
opacity: 0.8;
line-height: 21px;
margin-top:5px;
`;

