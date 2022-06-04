import React from 'react';
import styled from 'styled-components';
import { FaRegEdit } from "react-icons/fa";

interface Props {
    id: string;
}

const  EditProduct :React.FC<Props> = ({id}) => {

  return (
<Wrapper>
    <FaRegEdit/>
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
    }

`