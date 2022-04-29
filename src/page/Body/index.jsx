import React from 'react'
import Bosqichlar from '../../Component/Bosqichlar'
import HomeOpener from '../../Component/HomeOpener'
import Kurslar from '../../Component/Kurslar'
import Mashgulotlar from '../../Component/Mashgulot'
import Missiya from '../../Component/Missiya'
import Savollar from '../../Component/Savollar'
import Shartlar from '../../Component/Shartlar'
import Talablar from '../../Component/Talablar'
import Testmonsials from '../../Component/Testmonsials'

export const Page1 = () => {
    return (
        <div>
            <HomeOpener/>
            <Missiya/>
            <Talablar/>
            <Bosqichlar/>
            <Kurslar/>
            <Mashgulotlar/>
            <Shartlar/>
            <Testmonsials/>
            <Savollar/>
        </div>
    )
}


export default Page1