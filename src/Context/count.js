import React, {createContext, useState} from 'react'

export const FozilInfo = createContext()

export const Count = ({children}) => {
    const [count, setCount] = useState(1235)
    return (
        <FozilInfo.Provider value={[count, setCount]}>
         {children}
        </FozilInfo.Provider>
    )
}


export default Count