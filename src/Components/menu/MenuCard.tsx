import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { MenuProductCategory } from '../../context/Constants';
import { QueryProps } from './CategoryMenuFilter';
import CategoryMenuFilter from "./CategoryMenuFilter";






const query = graphql`
{
  allStrapiMenu {
    nodes {
      title
      price
      menu_category
      description
      id
      menu_image {
        localFile {
          url
          childImageSharp {
            gatsbyImageData(formats: WEBP, placeholder: TRACED_SVG, width: 200)
          }
        }
      }
    }
  }
}
`



const  MenuCard :React.FC = () => {

  const queryData:QueryProps = useStaticQuery(query)
 



  return (
<Wrapper> 
       
      <h2>Burgers</h2>
      <p className="sub-title">All beef is 100% certified Angus beef from Aspen Ridge</p>
      <div className="grid-container">
        <CategoryMenuFilter queryData={queryData} filterValue ={MenuProductCategory.MEAT_BURGER} />
      </div>
     
       <h2>Plant Base Burgers</h2>
       <p className="sub-title">Vegan & veggie-friendly menu exclusively crafted with the Impossible Burger on Vegan Bun</p>
       <div className="grid-container">
       <CategoryMenuFilter queryData={queryData} filterValue ={MenuProductCategory.PLANT_BURGER} />
       </div>
       <h2>Chicken</h2>
       <p className="sub-title">All sandwiches are made with all-natural chicken breast</p>
       <div className="grid-container">
       <CategoryMenuFilter queryData={queryData} filterValue ={MenuProductCategory.CHICKEN} />
       </div>
       <h2>Wings</h2>
       <p className="sub-title">Delicious chicken wings made with extra love for our  customers</p>
       <div className="grid-container">
       <CategoryMenuFilter queryData={queryData} filterValue ={MenuProductCategory.WINGS} />
       </div>

   
</Wrapper>
);
};

export default MenuCard;


const Wrapper = styled.section`
  
     grid-column: 2 / 14;
    width: 100%;
    margin-bottom: 5rem;
    background-color:#F7F3E3;
    border-radius: 5px;
    color:var(--clr-text-1);
  
    
   
    .grid-container{
      display: grid;  
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fill,minmax(30rem,1fr));   
      margin: 0 4rem;
    }



    h2{
      text-align: center;
      font-size: 3.5rem;
      margin: 2rem 0;
    }

    .sub-title{
      text-align: center;
      font-family: var(--ff-primary-3);
      font-weight: 300;
      font-size:2rem;
      margin-bottom: 5rem;
    }



`