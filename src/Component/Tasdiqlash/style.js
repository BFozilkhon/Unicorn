import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 85vh;
background: #272329;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 50px;
line-height: 75px;
text-align: center;
color: #FFFFFF;
`;

export const Flexing = styled.div`
display: flex;
margin-top: 50px;
`;

export const Btn = styled.div`
background: #B09263;
border-radius: 8px;
width: 180px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
font-size: 18px;
font-weight: 500;
cursor: pointer;
`;  


export const Item = styled.div`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
margin-bottom: 15px;
`;

export const Input = styled.input`
border:none;
outline: none;
border-bottom: 2px solid rgba(255, 255, 255, 0.5);
padding-bottom: 5px;
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #FFFFFF;  
background: none;
width: 400px;
margin-right: 30px;
`;