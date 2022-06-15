import React, { useState } from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import DisplayOrder from './DisplayOrder';
import OrderStatusForm from './OrderStatusForm';



const  FetchOrderStatus :React.FC = () => {
  const {state:{order}} = useHotburgerContext()


  return (
<Wrapper>
      {order ? <DisplayOrder/>:<OrderStatusForm/>}
</Wrapper>
);
};

export default FetchOrderStatus;


const Wrapper = styled.div`
    position: relative;
    background-color:var(--clr-background-menu);
    color:var(--clr-title-2); 
     grid-column: 5/11;
     border-radius: 5px;
     min-height: 60vh;
   

      /* 1200px - 1025px */
      @media only screen and (max-width:75em) {
        grid-column: 3/13;
    }
   

      /* 768px */
      @media only screen and (max-width:48em) {
        grid-column: 2/14;
    }



    
`