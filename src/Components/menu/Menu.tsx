import React from 'react';
import styled from 'styled-components';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import DisplayCurrentMenu from './DisplayCurrentMenu/DisplayCurrentMenu';
import MenuCategories from './MenuCategories';
import Modal from './DisplayCurrentMenu/modals/Modal';
import SEO from '../layout/Seo';

// import MenuCard from './MenuCard';

const  Menu :React.FC = () => {

  return (
<Wrapper>
  <SEO title="Menu"/>
    <Navbar/>
      <Modal/>
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

        /* 1200px-1025  */
        @media only screen and (max-width:75em) {
  
        grid-template-columns: [full-start] minmax(4rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(4rem ,auto) [full-end];
        grid-column-gap: 3rem;
      
    }
    
      /* 1024px - 769px  */
    @media only screen and (max-width:64em) {
      grid-template-columns: [full-start] minmax(1rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(1rem ,auto) [full-end];
        grid-column-gap: 1rem;

        .menu-container{
          grid-template-columns: 1fr;    
        }
    }


  /* 768px  - 481*/
    @media only screen and (max-width:48em) {
   
    }

    @media only screen and (max-width:30em) {
      .menu-container{
        width: 100%;
        }
  }
`