import styled from "styled-components";

export const Container = styled.div`
width: 100%;
position: relative;
padding-top: 130px;
`;

export const Wrapper = styled.div`
width: 75%;
margin:0px auto;
`;

export const Header = styled.div`
font-style: normal;
font-weight: 600;
font-size: 38px;
color: #272329;  
margin-bottom: 48px;
`;

export const Flexing = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// cards

export const Cards = styled.div`
padding: 10px 0px;
width: 330px;
margin: 12px;
height: 380px;
background: #FFFFFF;
border: 2px solid rgba(39, 35, 41, 0.08);
box-sizing: border-box;
border-radius: 6px;
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: space-evenly;
`;

export const Img = styled.img`
height: 30%;
width:150px;
margin-left: 40px;
`;

export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 18px;
color: #272329;  
margin-left: 40px;
`;

export const Hr = styled.div`
background: rgba(39, 35, 41, 0.08);
width:80%;
margin:0px auto;
height: 2px;
`;

export const Li = styled.li`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 30px;
color: #272329;  
opacity: ${({none})=> none && '0'};
margin-left: 40px;
`;