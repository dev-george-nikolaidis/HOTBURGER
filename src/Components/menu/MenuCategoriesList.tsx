import React, { useState } from 'react';
import styled from 'styled-components';
import { ActionTypes } from '../../context/Constants';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import { QueryPropsCategory } from './MenuCategories';


interface Props {
    queryData:QueryPropsCategory
}

const  MenuCategoriesList :React.FC<Props> = ({queryData}) => {
    const [currentMenuCategory,setCurrentMenuCategory] = useState("Signature Burgers")
    const {dispatch} = useHotburgerContext()
    
    const onChangeHandler = (e:React.FormEvent<HTMLOptionElement>) => {
        setCurrentMenuCategory(e.currentTarget.value)
        const currentCategory = e.currentTarget.getAttribute("data-category");
        dispatch({type:ActionTypes.SET_CURRENT_CATEGORY,payload:currentCategory})
    }

    
    let displayCategoryList = queryData.allStrapiCategory.nodes.map((cat) =>{
        const {category,category_image,id,title,slug} = cat;
         
        return <option label={title} key={id} value={title} onClick={onChangeHandler} data-category={category} >{title}</option>
    })
  return (
<Wrapper>
         <h3>Menu Categories</h3>
        <select  name={currentMenuCategory} >
         {displayCategoryList}
       </select>
</Wrapper>
);
};

export default MenuCategoriesList;


const Wrapper = styled.section`
    
    margin-left: 2rem;
    select{
        background-color: var(--clr-primary-1);
        font-weight: bold;
        padding: 0.4rem 1rem;
        border: none;
    }

    h3{
     margin-bottom: 1rem;
    }

`