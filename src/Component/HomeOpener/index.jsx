import React, { useContext } from 'react'
import { FozilInfo } from '../../Context/count';
import { ContainerImg, MainLogo, Title } from './style';

export const HomeOpener = () => {
    const [, setCount] = useContext(FozilInfo)
        window.addEventListener('scroll', ()=>{
            setCount(window.screen.height -700)
        })
    return (
        <ContainerImg id='1'>
            <MainLogo/>
            <Title>
            Unicorn - milliard dollarlik <br /> kompaniyalar sari
            </Title>
        </ContainerImg>
    )
}


export default HomeOpener;