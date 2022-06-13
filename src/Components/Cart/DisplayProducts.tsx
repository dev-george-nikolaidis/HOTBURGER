import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import EditProduct from './EditProduct';
import RemoveProduct from './RemoveProduct';


interface Product {
    title: string
    image: string
    message?:string
    temperature?:string
    quantity: number
    price: number,
    id: string
    
  }



const  DisplayProducts :React.FC = () => {
    const {state:{cart}} = useHotburgerContext();

    let displayProducts 


     if (cart.products.length > 0) {

        displayProducts = cart.products.map((product:Product,index:number) => {
          
            return (
                <div key={index} className="product-container"  >
                
                    < img  src={product.image} alt={product.title} className="product-img"/>
                 
                    <div className="text-container">
                        <div className="title-price-container">
                            <h3>{product.title}</h3>
                            <p className="product-price">${product.price} X {product.quantity}</p>
                        </div>
                        {product.temperature && <p className="temperature">Temperature: {product.temperature}</p>}
                        {product.message && <p className="message">Message: {product.message}</p>}
                        <div className="actions-container">
                            {/* <EditProduct id={product.id}/> */}
                            <RemoveProduct id={product.id} />
                        </div>
                    </div>
                
                </div>
            )
        })
    
     }

  return (
<Wrapper>
    {displayProducts}
</Wrapper>
);
};

export default DisplayProducts;


const Wrapper = styled.div`
        margin: 4rem 0;

    h3{
        font-size: 2.2rem;
        
    }

   .product-container{
        display: flex;
        padding: 0 4rem;
        margin-bottom: 1.5rem;
        width: 100%;
     
     &:hover{
        background-color:#dfd4c4;
     }   
    }


    .product-img{
        width: 20rem;
        height: 10rem;
        /* border: 2px solid rgba(0,0,0,0.5); */
        border-radius:10px;
      
    }
    
    .text-container{
        flex:1;
        margin-left: 2rem;
        /* background-color:blue; */
        display: flex;
        flex-direction: column;
        justify-content:space-between;
     
    }

    .title-price-container{
        display: flex;
        justify-content:space-between;
        /* background-color:yellow; */
    }

    .temperature{
        font-size:1.6rem;
    }
    .message{
        width: 30rem;
        overflow: hidden;
        white-space: nowrap;
         text-overflow: ellipsis;
         font-size:1.6rem;
        
    }

    .actions-container{
     display: flex;
        
    }
    .product-price{
        font-size:1.6rem;
    }
`