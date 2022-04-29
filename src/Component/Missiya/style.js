import styled, { keyframes } from "styled-components";
import missiya from '../../assets/img/missiya.png'
import {ReactComponent as buttons} from '../../assets/icon/aylana.svg'

export const Wrapper = styled.div`
width: 75%;
margin:0px auto;
display: flex;  
padding: 130px 0px;
`;


export const Img = styled.div`
background-image: url(${missiya});
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


export const Header = styled.div`
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 52px;
color: #272329;
`;


export const Title = styled.div`
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;
color: #272329;
`;


export const Item = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #B09263;  
`;


// 2qism


export const Container = styled.div`
width: 100%;
background: #272329;
padding: 100px 0px;
display: flex;
align-items: center;
`;

export const ContainerBox = styled.div`
  width: 75%;
  margin: 0px auto;
`;


export const Word = styled.div`
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 44px;
color: #FFFFFF;
`;

export const Flexing = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;


export const Relativing = styled.div`
position: relative;
  width: 260px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    .one{
      animation: harakat1 1s infinite linear; 

    }
    .two{
      animation: harakat2 1s infinite linear; 
    }
    
  }


  @keyframes harakat1{
    10%{
      transform:rotate(2deg) ;
    }
    15%{
      transform:rotate(5deg) ;
    
    }
    25%{
      transform:rotate(4deg) ;
    }
    50%{
      transform:rotate(2deg) ;
    
    }
    100%{
      transform:rotate(-4deg) ;
    
    }
  }


  @keyframes harakat2{
    10%{
      transform:rotate(170deg) ;

    }
    15%{
      transform:rotate(165deg) ;

    }
    25%{
      transform:rotate(160deg) ;
    }
    50%{
      transform:rotate(165deg) ;

    }
    100%{
      transform:rotate(174deg) ;

    } 
   }
`;

export const Btn1 = styled(buttons)`
width: 295px;
height: 90px;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
font-size: 16px;
cursor: pointer;
transform: rotate(-2deg);
position: absolute;
top: 0;
:hover{
  animation: harakat1 1s infinite;
  path{
        transition: all 0.5s;
        stroke:rgb(252, 219, 3);
    }
  }
 

`;

export const Btn2 = styled(buttons)`
width: 295px;
height: 90px;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
font-size: 16px;
cursor: pointer;
position: absolute;
top: 0px;
transform: rotate(174deg);
`;

export const Words = styled.div`
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #FFFFFF;  
`;


