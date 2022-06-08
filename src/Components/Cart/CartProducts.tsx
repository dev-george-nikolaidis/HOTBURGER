import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';

import DisplayProducts from './DisplayProducts';





const  CartProducts :React.FC = () => {

  const {state:{cart}} = useHotburgerContext();



  return (
<Wrapper>
     <div className="title-container">
        <h2>My Cart ( <span >{cart.products.length}</span> items)</h2>
         <p>  Total $<span >{cart.totalPrice}</span>   </p>
     </div>
     {cart.products.length === 0 ? <p className="empty">The Cart is empty </p> : null}
    <DisplayProducts/>
</Wrapper>
);
};

export default CartProducts;


const Wrapper = styled.section`

    overflow-y: auto;
    background-color:var(--clr-background-menu);
    color:var(--clr-title-2); 
     grid-column: 7/14;
     border-radius: 5px;
     height: 100%;
    

     .title-container{
         padding: 4rem;
         font-size: 2.5rem;
         display: flex;
         justify-content:space-between;
     }
    span{
        color:var(--clr-primary-1);
        font-weight: bold;
    }
 


    .empty{
        padding: 2rem 4rem;
        color:red;
        font-size: 2rem;
    }



`