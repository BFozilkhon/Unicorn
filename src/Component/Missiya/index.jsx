import React from 'react'
import { Wrapper, Img, Box, Header, Item, Title, Container, Word, Flexing, Btn1,Btn2, ContainerBox, Relativing, Words } from './style'

export const Missiya = () => {
    return (
        <div id='2'>

        <Wrapper>
            <Img/>
            <Box>
                <Header>Bizning Missiya</Header>
                <Title>Unicorn loyihasining asosiy maqsadi — dasturchilar elitasini shakllantirish. Iqtidorli yoshlarni IT olamiga kirishga koʻmak berib, ulardan kelajakda nufuzli FAANG dasturchilari, xalqaro startap yaratuvchilari va “Unicorn” kompaniya asoschilarini kashf qilish.</Title>
                <Item>*FAANG — Facebook, Apple, Amazon, Netflix, Google kompaniyalarining qisqa nomlari <br /> **Unicorn — kapitalizatsiyasi 1 mlrd. dollardan oshgan kompaniyalar</Item>
            </Box>
        </Wrapper>

        {/* 2qism */}

           <Container>
               <ContainerBox>
               <Word>“Unicorn” ta’lim loyihada  <span style={{color:' #B09263'}}>18 yoshdan 28 yoshgacha</span> bo’lgan barcha qat’iyatli va iqtidorli yoshlar ishitrok etish mumkin.</Word>
               <Flexing>
                   <Word>Hech bir talabgor e'tiborsiz qoldirilmaydi.</Word>
                  <Relativing>
                   <Btn1 className='one'></Btn1>
                   <Btn2 className='two'></Btn2>
                   <Words>Royhatdan otish</Words>
                  </Relativing>
               </Flexing>
               </ContainerBox>
           </Container>

        </div>
    )
}


export default Missiya