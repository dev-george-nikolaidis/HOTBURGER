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
     min-height: 50vh;
   


   

    
`