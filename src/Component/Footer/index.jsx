import React from 'react'
import { Container, Wrapper, Box, Logo, Header, Item, Phone, Flexing, LinkItem, Email, Location, Telegram, Facebook, Twitter, Youtube, LinkedIn, Instagram, Div, Word } from './style'

export const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Box large>
                    <a href="#1">
                    <Logo/>
                    </a>
                    <Header>Unicorn - milliard dollarlik <br /> kompaniyalar sari</Header>
                    </Box>
                <Box>
                    <Item href='#2'>Loyiha maqsadi</Item>
                    <Item href='#3'>Mutaxassisliklar</Item>
                    <Item>Tanlov bosqichlari</Item>
                    <Item>Kerakli hujjatlar</Item>
                </Box>
                <Box>
                    <Item>Qabul</Item>
                    <Item>Natijalar</Item>
                    <Item>FAQ</Item>
                    <Item>Help</Item>
                </Box>
                <Box>
                    <Item>Biz bilan aloqa</Item>
                    <Flexing>
                        <Phone/>
                        <LinkItem href='tel: +998787774747'>(78) 777-47-47</LinkItem>
                    </Flexing>
                    <Flexing>
                        <Email/>
                        <LinkItem  href='mailto:info@unicorn.pdp.uz'>info@unicorn.pdp.uz</LinkItem>
                    </Flexing>
                    <Flexing>
                        <Location/>
                        <LinkItem target='_blank' href='https://www.google.ru/maps/place/PDP+Academy/@41.3264791,69.226296,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8bb7a0ebbae3:0xf9e01b5d45fc68cd!8m2!3d41.3264751!4d69.2284847'>Beruniy ko'chasi., 3A-uy</LinkItem>
                    </Flexing>
                </Box>


            </Wrapper>

                <Wrapper second>
                    <Div>
                    <a target='_blank' href="https://www.facebook.com/search/top?q=pdp">
                    <Facebook/>
                    </a>
                    <a target='_blank' href="https://twitter.com/?lang=ru">
                    <Twitter/>
                    </a>
                    <a target='_blank' href="https://t.me/pdpgroupofficial">
                    <Telegram/>
                    </a>
                    <a target='_blank' href="https://www.youtube.com/c/pdpuz">
                    <Youtube/>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/posts/scottdresden_next-generation-silent-drone-achieves-major-activity-6885948728314736640-eH9i">
                    <LinkedIn/>
                    </a>
                    <a target='_blank' href="https://www.instagram.com/pdpuz/">
                    <Instagram/>
                     </a>
                    </Div>
                    <Word>Unicorn by PDP Academy  2022 ©All rights reserved </Word>
                </Wrapper>
        
        
        </Container>
    )
}

export default Footer