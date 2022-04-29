import React from 'react'
import { Container, Wrapper, Header, Circle, Flexing, Title, Item, Box, Img } from './style'

export const Mashgulotlar = () => {
    return (
        <Container>
            <Wrapper>
                <Box>

                <Header><span style={{color:'#B09263'}}>Mashg’ulotlarning</span> <br /> o’tkazilish tartibi</Header>
                <div>

                <Title>Mashgulotlar:</Title>
                <Flexing>
                    <Circle />
                    <Item>Haftada 5kun</Item>
                </Flexing>
                <Flexing>
                    <Circle />
                    <Item>4 soat mentor va assistentlar bilan </Item>
                </Flexing>
                <Flexing>
                    <Circle />
                    <Item>4 soat self study tarzida</Item>
                </Flexing>
                </div>

                {/* second */}
                <div>


                <Title>Darsda 2ta smena tashkil etiladi:</Title>
                <Flexing>
                    <Circle />
                    <Item>8:30 dan 12:30 gacha</Item>
                </Flexing>
                <Flexing>
                    <Circle />
                    <Item>14:30 dan 18:30 gacha</Item>
                </Flexing>
               
                </div>


                </Box>
                <Img />
                
                
            </Wrapper>
        </Container>
    )
}


export default Mashgulotlar