import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import CartProducts from './CartProducts';
import UserForm from './UserForm';



interface Props {
    path: string;
    
}



const  Cart :React.FC<Props> = () => {
 
  return (
<Wrapper>
    <div className="grid-container">
    <Navbar/>
     <UserForm/>
     <CartProducts/>
    <Footer/>
    </div>
</Wrapper>
);
};

export default Cart;


const Wrapper = styled.section`
      background-color:var(--clr-background-1);
     color:var(--clr-title-1); 
    
     .grid-container{
     
         display:  grid;
         grid-template-columns: [full-start] minmax(14rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(14rem ,auto) [full-end];
         gap:0 2rem;
       
     }


`