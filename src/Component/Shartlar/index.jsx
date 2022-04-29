import React from 'react'
import Ariza from './Ariza'
import { Box, Container, Header, Img, Li, Wrapper } from './style'

export const Shartlar = () => {
    return (
        <Container>
            <Header>“Unicorn” ta’lim loyihasi doirasida <br /> qanday talablar mavjud?</Header>
            <Wrapper>
                <Img/>
                <Box>
                    <Li>“Unicorn” ta’lim loyiha egasi va PDP Academy o’rtasida shartnoma tuziladi.</Li>
                    <Li>Talaba va PDP Academy o'rtasida “Unicorn” ta’lim loyihasining qiymatini to'lash muddati va har oyda to'lanadigan summa kelishuv asosida hal qilinadi.</Li>
                    <Li>Ish bilan ta’minlash faqat PDP Academy tomonidan amalga oshiriladi.</Li>
                    <Li>Agar talaba o’zi ishga joylashmoqchi bo’lsa ham shartnomada keltirilgan to’lovni har oyda to’lab boradi.</Li>
                </Box>
            </Wrapper>
            <Ariza/>
        </Container>
    )
}

export default Shartlar
