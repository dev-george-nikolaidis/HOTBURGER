import React from 'react';
import styled from 'styled-components';
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
    id: string;
}

const  RemoveProduct :React.FC<Props> = ({id}) => {

    const handleRemoveClick = () => {
        console.log("we will remove the product with id: " ,id)
    }
  return (
<Wrapper>
    <FaRegTrashAlt onClick={handleRemoveClick}/>
    <p>Remove</p>
</Wrapper>
);
};

export default RemoveProduct;


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    
    p{
        margin-left:1rem;
    }
`