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
                    <div className="img-container">
                        < img  src={product.image} alt={product.title} className="product-img"/>
                    </div>
                    <div className="text-container">
                        <div className="title-price-container">
                            <h3>{product.title}</h3>
                            <p className="product-price">${product.price} X {product.quantity}</p>
                        </div>
                        {product.temperature && <p className="temperature">Temperature: {product.temperature}</p>}
                        {product.message ? <p className="message">Message: {product.message}</p>: <p className="message">Message:</p>} 
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

   .img-container{
   
   } 

    .product-img{
        width: 15rem;
        height: auto;
        object-fit:fill;
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
        max-width: 30rem;
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


 /*768px - 481px */
 @media only screen and (max-width:48em) {


    .product-container{
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }

    .img-container{
        text-align: center;
    }
    .title-price-container{
   
    }
    
    h3{
        font-size:1.6rem;
    }
    .product-price{
        margin: 0.5rem 0;
    }

    .message{
        margin: 0.5rem 0;
    }
}


  /* 480px -  320px  */
  @media only screen and (max-width:30em) {
    .message{
        max-width: 10rem;
    }

    .title-price-container{
      display:block;
     
        /* background-color:yellow; */
    }
    }
`