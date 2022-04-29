import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Sinov from '../Component/Sinov'
import Page1 from '../page/Body'
import Page2 from '../page/Register'

export const Root = () => {
    return <div>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Page1/>} />
            <Route exact path='/register' element={<Page2/>} />
            <Route exact path='/sinov' element={<Sinov/>} />
        </Routes>
        <Footer/>
    </div>
}

export default Root