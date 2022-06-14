import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { ActionTypes } from '../../../context/Constants';
import { useHotburgerContext } from '../../../context/hotburger/HotburgerContext';

export type QueryProps = {
    
      allStrapiMenu: {
        nodes: Array<{
          title: string
          slug: string
          price: number
          id: string
          description: string
          category: string
          calories: string
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
    
    extensions: {}
  }
  

interface Product {
  
        title: string
        slug: string
        price: number
        id: string
        description: string
        category: string
        calories: string
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
  
}




interface Props{
    
    queryData:QueryProps,
    sectionTitle:string,
    sectionDescription:string
}


const  ProductPageLayout :React.FC<Props> = ({queryData, sectionTitle,sectionDescription}) => {
        const {dispatch,state:{ currentItemClicked}} = useHotburgerContext()

    // const queryData:QueryProps = useStaticQuery(query)
    const handleClick= (e:React.MouseEvent<HTMLButtonElement> ) => {

        e.preventDefault();
        const title = e.currentTarget.getAttribute("data-title");
        const imageUrl = e.currentTarget.getAttribute("data-url");
        const description = e.currentTarget.getAttribute("data-description");
        const menuCategory = e.currentTarget.getAttribute("data-menu-category");
        const price = Number(e.currentTarget.getAttribute("data-price"));
        const productId = (e.currentTarget.getAttribute("data-product-id"))
  
        dispatch({type:ActionTypes.SET_CURRENT_ITEM_CLICKED,payload:{title,imageUrl,description,menuCategory,price,productId}})
  }


        console.log(currentItemClicked)

    let displayProducts = queryData.allStrapiMenu.nodes.map((product:Product)=>{
      const {id,calories,category,description,menu_image,price,title} = product;
  
      return(
          <div className="product-container" key={id}>
              <div className="product-image-container">
                  {/* @ts-ignore */}
                  <GatsbyImage image = {menu_image.localFile.childImageSharp.gatsbyImageData} alt={title} className="product-image" />
              </div>
              <div className="details-container">
  
                <div className="title-container">
                   <h3 className="title">{title}</h3>
                   <p className="price">${price}</p>
                </div>
                <p className="description">{description ? description : ""}</p>
                <button type="button" className="btn-cta"
                 data-title={[title]} 
                 data-url={[menu_image.localFile.url]}
                  data-description={[description]}
                   data-price={[price]} 
                   data-menu-category={[category]}
                    data-product-id={[id]} 
                     onClick={(handleClick)}
                
                >Add to Card</button>
              </div>
          </div>
      )
    })
  return (
<Wrapper>
    <h2>{sectionTitle}</h2>
    <div className="img-container">
          <StaticImage  src = "../../../../assets/images/line.png" alt="line" className="image-line" />  
        </div>
        <p className="sub-title">{sectionDescription}</p>
        <div className="burgers-container">
           {displayProducts}
       </div>
</Wrapper>
);
};

export default ProductPageLayout;


const Wrapper = styled.section`
   padding: 2rem;

.burgers-container{
  display: grid;  
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fill,minmax(30rem,1fr));   
  margin: 0 4rem;
}


  h2{
    text-align: center;
    margin: 4rem 0 0 0;
    font-size: 2.8rem;
    letter-spacing: 0.4rem;
    font-family: var( --ff-primary-1);
    font-weight: 600;
  }

.sub-title{
   text-align: center;
   font-family: var(--ff-primary-3);
    font-weight: 300;
    font-size:2rem;
   margin-bottom: 5rem;
 }


 .img-container{
  text-align: center;
  margin: 1rem 0;
 }


 /* Product Container */
 .product-container{
  background-color: #FCFAF0;
  min-height: 45rem;
  display:grid;
  grid-template-rows: 20rem 1fr;
}

 .title-container{
  display: flex;
  justify-content:space-between;
  
  
 }

 .product-image-container{
  display: flex;
  justify-content:center;
 }

 .product-image{
  /* width: 100%; */
  object-fit:cover;
 }


  .details-container{
  display: flex;
  flex-direction: column;
  justify-content:space-between;
   
  margin-bottom: 4rem;
  padding: 1.6rem;
  height: 100%;
  
}


.title{
    font-size: 1.7rem;
}

.price{
  font-size: 2rem;
  margin-left: 1rem;
}

.description{
  font-size: 1.6rem;
}
button{
  margin-bottom:1rem;
}`