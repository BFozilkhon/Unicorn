import styled from "styled-components";
import {ReactComponent as buttons} from '../../assets/icon/aylana.svg'

export const Container = styled.div`
width: 100%;
background: #272329;
padding: 84px 0px;
`;

export const Wrapper = styled.div`
width: 75%;
margin: 0px auto;
`;


export const Flexing = styled.div`
display: flex;
justify-content: ${({baland})=> baland ? 'center':'space-between'};
margin-top: ${({baland})=> baland && '64px'};
flex-wrap: ${({baland})=> baland && 'wrap'};
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

export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 38px;
color: #ffffff;
`;