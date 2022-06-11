import React from 'react';
import styled from 'styled-components';
import FetchOrderStatus from './FetchOrderStatus';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

interface Props {
    path: string;
  }
  
const  OrderStatus :React.FC<Props> = () => {

  return (
<Wrapper>
    <div className="grid-container">
        <Navbar/>
          <FetchOrderStatus/>
        <Footer/>
    </div>
</Wrapper>
);
};

export default OrderStatus;


const Wrapper = styled.section`
    background-color:var(--clr-background-1);
     color:var(--clr-title-1); 
    
     .grid-container{
     
         display:  grid;
         grid-template-columns: [full-start] minmax(14rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(14rem ,auto) [full-end];
         gap:0 2rem;
       
     }


`