import React from 'react'
import Card from './Card'
import { Btn, Container, Flexing, Wrapper, Title, Relativing, Btn1, Btn2, Words } from './style'

export const Bosqichlar = () => {
    return (
        <Container>
            <Wrapper>
                <Flexing>
                    <Title>
                       <span style={{color:' #B09263'}}>Tanlov</span><br /> Bosqichlari
                    </Title>
                    <Relativing>
                   <Btn1 className='one'></Btn1>
                   <Btn2 className='two'></Btn2>
                   <Words>Royhatdan otish</Words>
                  </Relativing>
                </Flexing>
                <Flexing baland> 
                <Card num='01' header='Ariza topshirish' item='Qabul qilingan arizalar tanlov shartlariga mos ekanligi va ariza to’g’ri to’ldirilganligi korib chiqiladi va saralanadi. Tanlangan talabgorlarga keyingi bosqichga otgani haqida xabar beriladi' />
                <Card num='02' header='Video orqali suhbat' item='Bu bosqichda nomzodlardan matematika bilimlarini tekshirish maqsadida zoom ilovasi orqali masofaviy imtihon olinadi. Nomzodga o’rtacha qiyinlikdagi matematik 3-5 ta savol beriladi. ' />
                <Card num='03' header='Imtihon' item='3-bosqichga o’tganlar orasida PDP Academy binosida matematika, mantiq va ingliz tili boyicha imtihonlar otkaziladi. Umumiy imtihon natijalari 5-7 kun ichida elon qilinadi.' />
                <Card num='04' header='Suhbat' item='Keyingi bosqichga otgan har bir ishtirokchi bilan PDP Academy binosida suhbat otkaziladi. Suhbat hayat azolari tomonidan amalga oshiriladi va 10 daqiqa davom etadi. Keyingi bosqichga otganlar darslarga qoyiladi.' />
                <Card num='05' header='Intensive English' item='5.5 ballik IELTS sertifikatiga ega bõlmagan va ingliz tili imtixonidan muvaffaqiyatli õta olmagan talabgorlarga 3 oylik (12 hafta) “intensive english” kursi tavsiya qilinadi KURSGA YOZILISH' />
                <Card num='06' header='Sinov oyi' item='Keyingi bosqichga otgan har bir ishtirokchi bilan PDP Academy binosida suhbat otkaziladi. Suhbat hayat azolari tomonidan amalga oshiriladi va 10 daqiqa davom etadi. Keyingi bosqichga otganlar darslarga qoyiladi.' />
                </Flexing>
            </Wrapper>
        </Container>
    )
}


export default Bosqichlar