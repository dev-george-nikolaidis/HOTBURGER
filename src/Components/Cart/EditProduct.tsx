import React from 'react';
import styled from 'styled-components';
import { FaRegEdit } from "react-icons/fa";
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';

interface Props {
    id: string;
}

const  EditProduct :React.FC<Props> = ({id}) => {
    const {dispatch,state:{cart}} = useHotburgerContext()

    const handleEditClick = () => {
        // console.log("we will edit the product with id: " ,id)
        

        // const    productToRemove = cart.products.filter((product:any) => product.id === id ) 
        // const {title,image,message,price,temperature,quantity,id : prodId} = productToRemove[0]
        // dispatch({type:ActionTypes.REMOVE_ITEM_FROM_CART,payload:{id:prodId,quantity:quantity,price:price}})
    }
  return (
<Wrapper>
    <FaRegEdit className="edit" onClick={handleEditClick}/>
    <p>Edit</p>
</Wrapper>
);
};

export default EditProduct;


const Wrapper = styled.div`
    margin-right: 2rem;
    display: flex;
    align-items: center;

    p{
        margin-left:1rem;
        font-size:1.6rem;
    }
    .edit{
        cursor: pointer;
        font-size:1.6rem;
    transition: var(--transition);
    }

    .edit:hover{
        color:var(--clr-success);
    }

`