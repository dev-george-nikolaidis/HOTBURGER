import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';

import DisplayProducts from './DisplayProducts';





const  CartProducts :React.FC = () => {

  const {state:{cart}} = useHotburgerContext();

  console.log(cart)

    const clickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.getAttribute("data-id");
        console.log(id)
    };



  return (
<Wrapper>
     <div className="title-container">
        <h2>My Cart ( <span className="cart-quantity-text">{cart.products.length}</span> items)</h2>
         <p>$ {cart.totalPrice}</p>
     </div>
     {cart.products.length === 0 ? <p className="empty">The Cart is empty </p> : null}
    <DisplayProducts/>
</Wrapper>
);
};

export default CartProducts;


const Wrapper = styled.section`

    overflow-y: scroll;
    background-color:var(--clr-background-menu);
    color:var(--clr-title-2); 
     grid-column: 7/14;
     border-radius: 5px;
     height: 92rem;
    

     .title-container{
         padding: 4rem;
         font-size: 2.5rem;
         display: flex;
         justify-content:space-between;
     }
    .cart-quantity-text{
        color:var(--clr-primary-1);
    }
 


    .empty{
        padding: 2rem 4rem;
        color:red;
    }



`