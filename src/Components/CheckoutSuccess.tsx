import React from 'react';
import styled from 'styled-components';

interface Props {
    path: string;
  }
  


const  CheckoutSuccess :React.FC<Props> = () => {

  return (
<Wrapper>
    <h2>Checkout Success</h2>
</Wrapper>
);
};

export default CheckoutSuccess;


const Wrapper = styled.div``