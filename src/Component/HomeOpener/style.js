import styled from "styled-components";
import opener from '../../assets/img/opener.png'
import {ReactComponent as mainLogo} from '../../assets/icon/main-logo.svg'

export const ContainerImg = styled.div`
background-image: url(${opener});
width: 100%;
height: 100vh;
background-size: 100% 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


export const MainLogo = styled(mainLogo)`
margin-bottom: 38px;
`;

export const Title = styled.div`
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 75px;
color: #FFFFFF;
text-align: center;
margin-bottom: 80px;
`;