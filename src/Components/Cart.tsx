import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../context/hotburger/HotburgerContext';

interface Props {
    path: string;
}

const  Cart :React.FC<Props> = () => {
    const {state:{cart}} = useHotburgerContext();

    console.log(cart)
    let displayProducts = cart.products.map((product,index:number) => {
        return (
            <div key={index}>
                <h2>{product.title}</h2>
                <img src={product.image} alt="" />
                <p>{product.message}</p>
                <p>{product.quantity}</p>
            </div>
        )
    })
  return (
<Wrapper>
    <Link to="/">Home</Link>
    <h1>Welcome to the Cart</h1>
    {displayProducts}
</Wrapper>
);
};

export default Cart;


const Wrapper = styled.div``