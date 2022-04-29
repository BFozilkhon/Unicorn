import React from 'react'
import { Container, Flexing, Wrapper, Header, Cards, Hr, Img, Li, Title } from './style'
import card1 from '../../assets/img/card1.png'
import card2 from '../../assets/img/card2.png'
import card3 from '../../assets/img/card3.png'
import card4 from '../../assets/img/card4.png'

export const Kurslar = () => {
    return (
        <Container id='3'>
            <Wrapper>
                <Header>Talim Yo`nalishlari</Header>
                <Flexing>
                  {/* 1 */}
                  <Cards>
                     <Img src={card1} alt='cardImg' />
                     <Title>Back-end development</Title>
         
                      <Hr/>
         
                     <div>
                         <Li>Java(Spring Framework)</Li>
                         <Li>C#(.NET Framework)</Li>
                         <Li>Python (Django)</Li>
                         <Li>JS (NodeJs)</Li>
                     </div>
                    </Cards> 
                    {/* 2 */}
                    <Cards>
                     <Img src={card2} alt='cardImg' />
                     <Title>Front-end development</Title>
         
                      <Hr/>
         
                     <div>
                         <Li>Reactjs</Li>
                         <Li none ></Li>
                         <Li none ></Li>
                         <Li none ></Li>
                        
                     </div>
                    </Cards> 
                    {/* 3 */}
                    <Cards>
                     <Img src={card3} alt='cardImg' />
                     <Title>Mobile development</Title>
         
                      <Hr/>
         
                     <div>
                         <Li>ios</Li>
                         <Li>Andiroid</Li>
                         <Li>Flutter</Li>
                         <Li none></Li>
                     </div>
                    </Cards> 
                    {/* 4 */}
                    <Cards>
                     <Img src={card4} alt='cardImg' />
                     <Title>Yangi yonalishlar</Title>
         
                      <Hr/>
         
                     <div>
                         <Li>VR</Li>
                         <Li>Data science</Li>
                         <Li>AI/ML</Li>
                         <Li>UI/UX</Li>
                     </div>
                    </Cards> 
               
                </Flexing>
            </Wrapper>
        </Container>
    )
}

export default Kurslar
