import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ActionTypes } from '../../context/Constants';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';

import DisplayProducts from './DisplayProducts';
import UserForm from './UserForm';





const  CartProducts :React.FC = () => {

  const {state:{cart,checkout},dispatch} = useHotburgerContext();
//   const [checkout ,setCheckout] = useState(false);



    const handleClick = () => {
       
        if (  cart.products.length > 0) {
         
            dispatch({type:ActionTypes.CHECKOUT_INDENT,payload:!checkout})
        }
    }


  return (
<Wrapper>
    { checkout === true ? null : <>
     <div className="checkout-container">
        <div className="title-container">
            <h2>My Cart ( <span >{cart.products.length}</span> items)</h2>
            <div className="buttons-container">
            <Link className="btn-ghost" to="/menu">Menu</Link>
            <button className="btn-cta" onClick={handleClick}>Checkout $<span >{cart.totalPrice}</span></button>
            </div>
        </div>
    </div>
     {cart.products.length === 0 ? <p className="empty">The Cart is empty </p> : null}
    <DisplayProducts/>
     </>
     }
    
    {checkout && <UserForm/>}
</Wrapper>
);
};

export default CartProducts;


const Wrapper = styled.section`

    overflow-y: auto;
    background-color:var(--clr-background-menu);
    color:var(--clr-title-2); 
     grid-column: 5/11;
     border-radius: 5px;
     min-height: 80rem;
     position: relative;

     .title-container{
         padding: 4rem;
         font-size: 2.5rem;
         display: flex;
         justify-content:space-between;
         align-items: center;
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


    .checkout-container{
        position: sticky;
        top: 0;
        background-color:var(--clr-background-menu);
    }

    button span{
        color:var(--clr-primary-2)
    }

    .btn-ghost{
        margin-right: 2rem;
    }
`