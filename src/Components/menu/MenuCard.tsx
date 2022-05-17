import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { MenuProductCategory } from '../../context/Constants';
import { FaCartPlus } from "react-icons/fa";



type QueryProps = {
  allStrapiMenu: {
    nodes: Array<{
      title: string
      price: number
      menu_category: string
      description: string
      id: string
      menu_image: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: string
              placeholder: {
                fallback: string
              }
              images: {
                fallback: {
                  src: string
                  srcSet: string
                  sizes: string
                }
                sources: Array<any>
              }
              width: number
              height: number
            }
          }
        }
      }
    }>
  }

extensions?: {}
}


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
  
  const categoryMenuFilter =  (data:QueryProps,filterValue:string) =>{

    let category = data.allStrapiMenu.nodes.map((menuProduct)=>{

      const  {id,title,description,price,menu_image,menu_category} = menuProduct;

      if (menu_category != filterValue) {
        return;
      }
      
      return(
        <div className="product-container" key = {id}>
          <div className="image-container">
            {/* @ts-ignore */}
            <GatsbyImage image={menu_image.localFile.childImageSharp.gatsbyImageData} alt={title} className="product-image"/>
            
          </div>
            <div className="details-container">
                <div className="title-price">
                    <h4 className="title">{title}</h4>
                    <p className="price">${price}</p>
                </div>
                <p className="description">{description}</p>
                <button><FaCartPlus className="btn-icon"/> <span className="button-text"></span> Add to Card</button>
            </div>
        
        </div>
      )
    })
    return category;
  }



  let displayMeatBurgers = categoryMenuFilter(queryData,MenuProductCategory.MEAT_BURGER)
  let displayPlanBurgers = categoryMenuFilter(queryData,MenuProductCategory.PLANT_BURGER)
  let displayChickenBurgers = categoryMenuFilter(queryData,MenuProductCategory.CHICKEN)
  let displayWings = categoryMenuFilter(queryData,MenuProductCategory.WINGS)
  
  return (
<Wrapper>
      <h2>Burgers</h2>
      <p className="sub-title">All beef is 100% certified Angus beef from Aspen Ridge</p>
       {displayMeatBurgers}
       <h2>Plant Base Burgers</h2>
       <p className="sub-title">Vegan & veggie-friendly menu exclusively crafted with the Impossible Burger on Vegan Bun</p>
       {displayPlanBurgers}
       <h2>Chicken</h2>
       <p className="sub-title">All sandwiches are made with all-natural chicken breast</p>
       {displayChickenBurgers}
       <h2>Wings</h2>
       <p className="sub-title">Delicious chicken wings made with extra love for our  customers</p>
       {displayWings}
</Wrapper>
);
};

export default MenuCard;


const Wrapper = styled.div`

    display: grid;
    grid-template-columns: 2rem repeat(8,1fr) 2rem;
    grid-column-gap: 2rem;
    color:var(--clr-text-1);
   




    h2{
      font-size: 3.5rem;
      grid-column: 1 /11;
      justify-self: center;
      margin: 2rem 0;
    }

    .sub-title{
      grid-column: 1 /11;
      justify-self: center;
      font-family: var(--ff-primary-3);
      font-weight: 300;
      font-size:2rem;
      margin-bottom: 5rem;
    }

    .product-container{
      grid-column: 2 /10;
      min-height: 20rem;
       display:grid; 
      grid-template-columns: 30% 70%; 
      grid-column-gap: 2rem;
      border-bottom: 2px dotted rgba(0,0,0,0.5);
      margin-bottom:8rem;
    }
    
    .details-container{
      display: flex;
      flex-direction: column;
      justify-content:space-between;
      margin-bottom: 4rem;
      
      
    }
    .product-image{
      display: block; 
      height: 100%;
      border: 2px solid var(--clr-primary-1);
      border-radius:1rem;
    
     }

    .image-container{
      /* background-color: yellow; */
      margin-bottom: 4rem;
    }


    .title-price{
      display: flex;
      justify-content:space-between;

    }

    .title{
        font-size: 3rem;
    }

    .price{
      font-size: 2.5rem;
    }
 
    .description{
      font-size: 1.5rem;
      
    }  
 
  button{
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    background-color: var(--clr-primary-1);
    border: none;
    padding: 1.3rem 1.8rem;
    font-size:2rem;
    border-radius:0.5rem;
  } 
 
  .btn-icon{
    margin-right: 1rem;
  }
  .btn-text{

  }

`