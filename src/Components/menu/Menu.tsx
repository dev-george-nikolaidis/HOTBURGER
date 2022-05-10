import React from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar';

const  Menu :React.FC = () => {

  return (
<Wrapper>
    <Navbar/>
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
    

  
    
  

`