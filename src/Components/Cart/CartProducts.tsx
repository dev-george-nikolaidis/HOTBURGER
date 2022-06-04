import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'gatsby';
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


const  CartProducts :React.FC = () => {

  const {state:{cart}} = useHotburgerContext();

  console.log(cart)

    const clickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.getAttribute("data-id");
        console.log(id)
    };


  let displayProducts = cart.products.map((product:Product,index:number) => {
      return (
          <div key={index} className="product-container"  >
              <img  src={product.image} alt={product.title} className="product-img"/>
              <div className="text-container">
              <div className="title-price-container">
                   <h3>{product.title}</h3>
                    <p>${product.price} X {product.quantity}</p>
              </div>
                {product.temperature && <p className="temperature">Temperature: {product.temperature}</p>}
                <div className="actions-container">
                    {/* <EditProduct id={product.id}/> */}
                    <RemoveProduct id={product.id}/>
                </div>
             
              </div>
             
          </div>
      )
  })
  return (
<Wrapper>
     <div className="title-container">
        <h2>My Cart ( <span className="cart-quantity-text">{cart.products.length}</span> items)</h2>
        <FaShoppingCart className="card-icon"/>
     </div>
    {displayProducts}
    <div className="buttons-container">
        <div className="padding-container">
           <Link to="/menu" className="btn-ghost btn-link" >Continue Adding Items</Link>   
           <button className="btn-cta">Create Order</button>

        </div>
    </div>
</Wrapper>
);
};

export default CartProducts;


const Wrapper = styled.section`

    overflow-y: scroll;
    background-color:var(--clr-background-menu);
    color:var(--clr-title-2); 
     grid-column: 7/14;
     border-radius: 5px;
     height: 88rem;


     .title-container{
         padding: 4rem;
         font-size: 2.5rem;
         display: flex;
         justify-content:space-between;
     }
    .cart-quantity-text{
        color:var(--clr-primary-1);
    }

    /* Product */

    .product-container{
        display: flex;
       
        padding: 0 4rem;
        margin-bottom: 1.5rem;
        width: 100%;
    }

    h3{
        font-size: 2.2rem;
        
    }
    .product-img{
        width: 20rem;
        height: 10rem;
        border: 2px solid rgba(0,0,0,0.5);
        border-radius:10px;
    }
    .text-container{
        /* width: 100%; */
        flex:1;
       
        margin-left: 2rem;
    }
    .temperature{
    

    
    }
    .title-price-container{
        display: flex;
        justify-content:space-between;
    }
    .actions-container{
        align-content: flex-end;
        display: flex;
        height: 100%;
        
    }


/* Buttons */
    .buttons-container{
        
        position: sticky;
        bottom: 0;
        background-color:var(--clr-background-menu);
       
    }

    .padding-container{
        padding:  0 4rem;
    }
    button{
     margin-bottom: 2rem;
    }
    .btn-link{
        margin-bottom: 2rem;
        width: 100%;
        text-align: center;
    }

`