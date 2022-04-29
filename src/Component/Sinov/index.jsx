import React from 'react'
import Kurslar from '../Kurslar/index.jsx'
import {Container, Header, Item, Btn} from './style.js'

export const Sinov = () => {
    return (
        <div>

        <Container>
            <Header>“Unicorn” ta’lim grantiga ro‘yxatdan o‘tishingiz <br /> uchun 5 ta mantiqiy-matematik savol beriladi</Header>
            <Item>Har bir savol uchun <span style={{color:'#B09263'}}>20 balldan</span> beriladi. <span style={{color:'#B09263'}}>80 ball va undan yuqori</span> <br /> to'plasangiz, ariza topshiringiz tavsiya qilinadi.</Item>
            <Btn>Sinov savolini boshlash</Btn>
        </Container>
            <Kurslar/>
        </div>
    )
}


export default Sinov