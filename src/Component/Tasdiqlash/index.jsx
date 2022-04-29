import React, { useState } from 'react'
import Savollar from '../Savollar';
import { Container, Title, Flexing, Input, Btn, Item } from './style';

export const Tasdiqlash = () => {
    const [nomer, setNomer] = useState('+998 ')
    return (
        <div>

        <Container>
            <Title>ARIZAGIZ NATIJASINI BILISH UCHUN TELEFON <br /> RAQAMINGIZNI KIRITING!</Title>
            <Flexing>
                <div>
                 <Item>Telefon raqami</Item>
                <Input onChange={(e)=> setNomer(e.target.value)}  type='text' value={nomer}  />
                </div>
                <Btn>Tasdiqlash</Btn>
            </Flexing>
        </Container>

        <Savollar/>

        </div>
    )
}


export default Tasdiqlash;