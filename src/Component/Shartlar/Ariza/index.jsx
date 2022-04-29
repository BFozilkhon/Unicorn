import React from 'react'
import { Btn, Container, Title, Document } from './style'

export const Ariza = () => {
    return (
        <Container>
            <div>
                <Title> <span style={{color:'#B09263'}}>Ariza topshirish uchun talab</span> <br /> qilinadigan hujjatlar ro’yxati</Title>
                <Btn>Yuklab Olish</Btn>
            </div>
             <Document/>
            <div>
                <Title><span style={{color:'#B09263'}}>Qarz mablag’larini qaytarish </span> <br /> ta’rif va jadvallari</Title>
                <Btn>Yuklab Olish</Btn>
            </div>
        </Container>
    )
}

export default Ariza