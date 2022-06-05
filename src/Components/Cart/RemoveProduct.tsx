import React from 'react';
import styled from 'styled-components';
import { FaRegTrashAlt } from "react-icons/fa";
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import { ActionTypes } from '../../context/Constants';


interface Product {
    title: string
    image: string
    message?:string
    temperature?:string
    quantity: number
    price: number,
    id: string
    
  }

interface Props {
    id: string;
    
}

const  RemoveProduct :React.FC<Props> = ({id}) => {
    // console.log(id)
    const {dispatch,state:{cart}} = useHotburgerContext()

    const handleRemoveClick = () => {
        // console.log("we will remove the product with id: " ,id)
        

        const    productToRemove = cart.products.filter((product:any) => product.id === id ) 
        const {title,image,message,price,temperature,quantity,id : prodId} = productToRemove[0]
        dispatch({type:ActionTypes.REMOVE_ITEM_FROM_CART,payload:{id:prodId,quantity:quantity,price:price}})
    }

  return (
<Wrapper>
    <FaRegTrashAlt onClick={handleRemoveClick} className="remove"/>
    <p>Remove</p>
</Wrapper>
);
};

export default RemoveProduct;


const Wrapper = styled.div`
    display: flex;
    align-items: center;
  

    .remove{
        cursor: pointer;
    transition: var(--transition);
    }

    .remove:hover{
        color:var(--clr-error-1);
    }

    p{
        margin-left:1rem;
    }
`