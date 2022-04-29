import React,{useState} from 'react'
import { Item, Header, Flexing, Wrapper, Title, Word, Box } from './style'

export const Savollar = () => {
    const [title, setTitle] = useState('1')
    return (
        <div id='4'>
            <Header><span style={{color:'#B09263'}}>“Unicorn” ta'lim</span> loyihasi haqida tez- <br/>tez so'raladigan savollar</Header>        
           <Flexing>
               <Item style={{opacity: title == '1' && '1', borderBottom:title == '1' && '3px solid #B09263'  }} onClick={()=> setTitle('1')}>General</Item>
               <Item style={{opacity: title == '2' && '1', borderBottom:title == '2' && '3px solid #B09263' }} onClick={()=> setTitle('2')}>Payments</Item>
               <Item style={{opacity: title == '3' && '1', borderBottom:title == '3' && '3px solid #B09263' }} onClick={()=> setTitle('3')}>Returns</Item>
               <Item style={{opacity: title == '4' && '1', borderBottom:title == '4' && '3px solid #B09263' }} onClick={()=> setTitle('4')}>Refunds</Item>
               <Item style={{opacity: title == '5' && '1', borderBottom:title == '5' && '3px solid #B09263' }} onClick={()=> setTitle('5')}>Account</Item>
               <Item style={{opacity: title == '6' && '1', borderBottom:title == '6' && '3px solid #B09263' }} onClick={()=> setTitle('6')}>Subscription</Item>
               <Item style={{opacity: title == '7' && '1', borderBottom:title == '7' && '3px solid #B09263' }} onClick={()=> setTitle('7')}>Media Policy</Item>
           </Flexing>


           <Wrapper>
               <Box>
                   <Title>1. How can i get a Refund</Title>
                   <Word>Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</Word>
                   <Title>2. Can i cancel my subscription?</Title>
                   <Word>Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh.</Word>
                  <Title>3. Do you offer a Refund Guarantee?</Title>
                  <Word>Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Word>
               </Box>
               <Box>
                   <Title>4. How do I contact support?</Title>
                   <Word>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Word>
                   <Title>5. Can I use templates on our clients site?</Title>
                   <Word>Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</Word>
                   <Title>6. How should i pay?</Title>
                   <Word>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</Word>
               </Box>
           </Wrapper>
           
            </div>
    )
}

export default Savollar
