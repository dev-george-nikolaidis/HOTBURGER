import React from 'react';
import styled from 'styled-components';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import CartLayout from './CartLayout';
import MenuCard from './MenuCard';

const  Menu :React.FC = () => {

  return (
<Wrapper>
    <Navbar/>
    <div className="cards-container">

       <div className="menu-container">
          <MenuCard/>
       </div>

       <div className="cart-container">
          <CartLayout/>
       </div>

    </div>
    <Footer/>
</Wrapper>
);
};

export default Menu;


const Wrapper = styled.section`
  width: 100%;
  background-color:var(--clr-background-1);
  color:var(--clr-title-1);
  display:  grid;
  grid-template-columns: [full-start] minmax(14rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(14rem ,auto) [full-end];
  grid-column-gap: 3rem;
    
  .cards-container{
    grid-column: 2 / 14;
    display: grid;
    grid-gap: 2rem;
    max-height: 80vh;
    margin-bottom: 5rem;
    
  }

  .menu-container{
    grid-column:1/9;
    background-color:#F7F3E3;
    border-radius: 5px;
    overflow-y: auto;
   
  }

  .cart-container{
    grid-column: 9 / 14;
    background-color:#F7F3E3;
    border-radius: 5px;
    overflow-y: auto;
  }

    
  

`