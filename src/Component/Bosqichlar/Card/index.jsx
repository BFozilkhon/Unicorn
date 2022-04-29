import React from 'react'
import { Box, Header, Item } from './style'

export const Card = ({num, header, item}) => {
    return (
       <Box>
           <Header>{num}</Header>
           <div>
               <Header small>{header}</Header>
               <Item>{item}</Item>
           </div>
       </Box>
    )
}

export default Card
