import React from 'react'
import { Box, Container, Flexing, Header, Img, Square, Title, Text} from './style'

export const Talablar = () => {
    return (
       <Container>
            <Box>
                <Header>Loyihada qatnashish uchun talablar</Header>
                <Flexing>
                    <Square/>
                    <div>
                        <Title>Kuchli ishtiyoq</Title>
                        <Text>IT sohasiga qiziq va o’rganishga bolgan kuchli ishtiyoq</Text>
                    </div>
                </Flexing>
                {/* 2 */}
                <Flexing>
                    <Square/>
                    <div>
                        <Title>IELTS 5.5</Title>
                        <Text>Minimum 5.5 ball muqobiliga teng bilim talab qilinadi</Text>
                    </div>
                </Flexing>
                {/* 3 */}
                <Flexing>
                    <Square/>
                    <div>
                        <Title>Matematika va mantiq</Title>
                        <Text>Umumiy 150 ballik imtihondan 75 balldan yuqori to’plash</Text>
                    </div>
                </Flexing>
            </Box>
            <Img/>
       </Container>
    )
}

export default Talablar