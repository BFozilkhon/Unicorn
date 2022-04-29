import styled from "styled-components";
import {ReactComponent as logo } from '../../assets/icon/footer.svg'
import {ReactComponent as location } from '../../assets/icon/location.svg'
import {ReactComponent as phone } from '../../assets/icon/phone.svg'
import {ReactComponent as email } from '../../assets/icon/email.svg'
import {ReactComponent as telegram } from '../../assets/icon/telegram.svg'
import {ReactComponent as facebook } from '../../assets/icon/facebook.svg'
import {ReactComponent as twitter  } from '../../assets/icon/twitter.svg'
import {ReactComponent as linkedIn } from '../../assets/icon/linked-in.svg'
import {ReactComponent as youtube } from '../../assets/icon/youtube.svg'
import {ReactComponent as instagram } from '../../assets/icon/instagram.svg'

export const Container = styled.div`
background: #272329; 
padding: 60px 0px 48px 0px ;
margin-top: 100px;
`;


export const Wrapper = styled.div`
width: 75%;
margin: ${({second})=> second ? '60px auto 0px auto': '0px auto'};
display: flex;  
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
`;

export const Box = styled.div`
display: flex;
flex-direction: column  ;
margin:0px 30px;
`;


export const Logo = styled(logo)``;

export const Header = styled.div`
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 24px;
color: #FFFFFF;  
margin-top: 20px;
`;


export const Item = styled.a`
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 50px;
color: #FFFFFF;  
cursor: pointer;
transition: all 0.2s;
text-decoration: none;
:hover{
    color:#B09263;
}
`;

export const Flexing = styled.div`
display: flex;
margin:12px 0px;
align-items: center;
`;

export const Phone = styled(phone)`
margin-right: 21px;
`;
export const Email = styled(email)`
margin-right:21px;
`;
export const Location = styled(location)`
margin-right:25px;
margin-left:7px;
`;

export const LinkItem = styled.a`
text-decoration: none;
font-style: normal;
font-weight: normal;
font-size: 17px;
color: #FFFFFF;
transition: all 0.2s;
:hover{
    color:#B09263;
}
`;

export const Div = styled.div`
display: flex;
align-items: center;
`;

export const Telegram = styled(telegram)`
margin: 0px 10px;
`;
export const Facebook = styled(facebook)`
margin: 0px 10px;
`;
export const Twitter = styled(twitter)`
margin: 0px 10px;
`;
export const Youtube = styled(youtube)`
margin: 0px 10px;
`;
export const LinkedIn = styled(linkedIn)`
margin: 0px 10px;
`;
export const Instagram = styled(instagram)`
margin: 0px 10px;
`;

export const Word = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
color: rgba(255, 255, 255, 0.5);
`;