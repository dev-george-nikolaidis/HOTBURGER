import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from 'styled-components';
import { FaCartPlus } from "react-icons/fa";
import { useHotburgerContext } from "../../context/hotburger/HotburgerContext";
import { ActionTypes } from "../../context/Constants";



export type QueryProps = {
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
            url: string
          }
        }
      }>
    }
  
  extensions?: {}
  }




  interface Props { 
    queryData :QueryProps,
    filterValue:string
  }

  const  CategoryMenuFilter :React.FC<Props> = ({queryData,filterValue}) => {
    const {dispatch} = useHotburgerContext();

    const handleClick= (e:React.MouseEvent<HTMLButtonElement> ) => {

          e.preventDefault();
          const title = e.currentTarget.getAttribute("data-title");
          const imageUrl = e.currentTarget.getAttribute("data-url");
          const description = e.currentTarget.getAttribute("data-description");
          const menuCategory = e.currentTarget.getAttribute("data-menu-category");
          const price = Number(e.currentTarget.getAttribute("data-price"));
        
          dispatch({type:ActionTypes.SET_CURRENT_ITEM_CLICKED,payload:{title,imageUrl,description,menuCategory,price}})
    }

    const categoryMenuFilter =  (data:QueryProps,filterValue:string) =>{

      let category = data.allStrapiMenu.nodes.map((menuProduct)=>{
  
        const  {id,title,description,price,menu_image,menu_category , menu_image:{localFile:{url}}  } = menuProduct;
  
        if (menu_category != filterValue) {
          return;
        }
        
        return(
          <Container className="product-container" key = {id}>
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
                  <button className="btn-cta" data-title={[title]} data-url={[url]} data-description={[description]} data-price={[price]} data-menu-category={[menu_category]}  onClick={(e)=>handleClick(e)}  >
                    <FaCartPlus  className="btn-icon"/> 
                    <span className="button-text"> Add to Card</span>
                  </button>
              </div>
          
          </Container>
        )
      })
      return category;
    }

    return( 
    <>
    {categoryMenuFilter(queryData,filterValue)}
    </>
    )
  }

export default CategoryMenuFilter;


const Container = styled.div`

      min-height: 50rem;
      display:grid;
      grid-template-rows: 20rem 1fr;
      border: 2px solid rgba(0,0,0,0.5);
      border-radius:5px;
      margin-bottom:4rem;


      .details-container{
      display: flex;
      flex-direction: column;
      justify-content:space-between;
      margin-bottom: 4rem;
      padding: 1.5rem;
      height: 100%;
      
    }
    .product-image{
      display: block; 
      height: 100%;
      /* transition: var(--transition); */
      /* border: 5px solid var(--clr-primary-1);  */
      
      &:hover{
        /* transform: scale(1.01); */
      }
   
     }
    

    .image-container{
      height: 100%;
      
    }


    .title-price{
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin-top: 2rem;

    }

    .title{
        font-size: 3rem;
    }

    .price{
      font-size: 2.5rem;
      margin-bottom: 0;
      
    
    }
 
    .description{
      font-size: 1.8rem;
      
    }  
 
  button{
    /* align-self: flex-start; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    &:hover{
      background-color: var(--clr-primary-1-hover)
    }
  } 


 
  .btn-icon{
    margin-right: 1rem;

    font-size: 2.5rem;
  }
  .btn-text{

  }
`

  