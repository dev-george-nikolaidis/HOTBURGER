import React from 'react';
import styled from 'styled-components';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import DisplayCurrentMenu from './DisplayCurrentMenu/DisplayCurrentMenu';

import MenuCategories from './MenuCategories';
// import MenuCard from './MenuCard';
// import Modal from './modals/Modal';

const  Menu :React.FC = () => {

  return (
<Wrapper>
    <Navbar/>
      <div className="menu-container">
          <MenuCategories/>
          <DisplayCurrentMenu/>
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
  position: relative;
  
  
  .menu-container{
   grid-column: 2 / 14;
   width: 100%;
   margin-bottom: 5rem;
   background-color:var(--clr-background-menu);
   border-radius: 5px;
    color:var(--clr-text-1);
    display:grid;
    grid-template-columns: 30rem 1fr;
  }
`