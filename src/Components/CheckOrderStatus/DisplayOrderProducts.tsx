import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';

interface Product {
    title: string
    image: string
    message?:string
    temperature?:string
    quantity: number
    price: number,
    id: string
    
  }
const  DisplayOrderProducts :React.FC = () => {
    const {state:{order}} = useHotburgerContext()
    let displayProducts

    if (order) {
        displayProducts = order.products.map((product:Product,index:any)=>{
            console.log(product)


            const {id,image,price,quantity,title,message,temperature} = product;
            <div key={index} className="product-container"  >
                
            < img  src={image} alt={title} className="product-img"/>
         
            <div className="text-container">
                <div className="title-price-container">
                    <h3>{title}</h3>
                    <p className="product-price">${price} X {quantity}</p>
                </div>
                {temperature && <p className="temperature">Temperature: {temperature}</p>}
                {message && <p className="message">Message: {message}</p>}
            </div>
        
        </div>
        })
  
    }

  return (
<Wrapper>
    {displayProducts}
</Wrapper>
);
};

export default DisplayOrderProducts;


const Wrapper = styled.div``