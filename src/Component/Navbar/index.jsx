import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FozilInfo } from '../../Context/count';
import { Container, Wrapper, Logo, Title, Btn } from './style';

export const Navbar = () => {

    const navigate = useNavigate()

    const [name,setName] = useState('asosiy')
    const [count, setCount] = useContext(FozilInfo)
    const [heighting, setHeighting] = useState(0)
    window.addEventListener('scroll',() =>{
        setHeighting(window.scrollY)
    })


    const getLogo = () =>{
        setName('logo')
        navigate('/')
    }

    const getQabul = () =>{
        setName('qabul')
        navigate('/register')
    }

    const getSinov = () =>{
        setName('register')
        navigate('/sinov')
    }


    return (
       <Container style={{background : heighting >= count && '#000000'}}>
           <Wrapper>
               <Logo onClick={getLogo} />
               <Title style={{color:name == 'asosiy' && '#B09263'}} onClick={()=> setName('asosiy')} href='#1' >Asosiy sahifa</Title>
               <Title style={{color:name == 'maqsad' && '#B09263'}} onClick={()=> setName('maqsad')}  href='#2' >Loyiha maqsadi</Title>
               <Title style={{color:name == 'mutahasis' && '#B09263'}} onClick={()=> setName('mutahasis')}  href='#3' >Mutaxassisliklar</Title>
               <Title style={{color:name == 'faq' && '#B09263'}} onClick={()=> setName('faq')} href='#4' >FAQ</Title>
               <Title style={{color:name == 'qabul' && '#B09263'}} onClick={getQabul} >Qabul</Title>
               <Btn  style={{borderColor:name == 'register' && '#B09263', color:name == 'register' && '#B09263'}} onClick={getSinov} >Ro’yhatdan o’tish</Btn>
           </Wrapper>
       </Container>
    )
}

export default Navbar;