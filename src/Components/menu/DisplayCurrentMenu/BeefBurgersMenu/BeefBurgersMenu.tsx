import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import line from "../../../../assets/images/line.png"


type QueryProps = {

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
          }
        }
      }>
    }
  extensions?: {}
}


const query = graphql`
  {
    allStrapiMenu(filter: {category: {eq: "beef-burger"}}) {
      nodes {
        title
        slug
        price
        id
        description
        category
        calories
        menu_image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: WEBP, width: 200, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`

const  BeefBurgersMenu :React.FC = () => {
  const queryData:QueryProps = useStaticQuery(query)

// !Make a universal component for the display of products and just pass the query data
  let displayBeefBurgers = queryData.allStrapiMenu.nodes.map((product)=>{
    const {id,calories,category,description,menu_image,price,title} = product;

    return(
        <div className="product-container" key={id}>
             {/* @ts-ignore */}
             <GatsbyImage image = {menu_image.localFile.childImageSharp.gatsbyImageData} alt={title} className="product-image" />
              <div className="title-container">
                 <h3 className="title">{title}</h3>
                 <p className="price">${price}</p>
              </div>
              <p className="description">{description}</p>
              <button type="button" className="btn-cta">Add to Card</button>
        </div>
    )
  })


  return (
<Wrapper> 
        <h2>Signature Burgers</h2>
        <div className="img-container">
          <StaticImage  src = "../../../../assets/images/line.png" alt="line" className="image-line" />  
        </div>
       <p className="sub-title">Our signature burgers are always freshly made, hand-smashed to order with 100% Certified Angus Beef that is grass fed and supports local farms. Equipped with the freshest ingredients, no two burgers are alike – from sweet-seekers, smokehouse flavor fans, heat champions, and folks just looking for a tasty classic, we’ve got you covered.</p>
       <div className="burgers-container">
           {displayBeefBurgers}
       </div>
</Wrapper>
);
};

export default BeefBurgersMenu;


const Wrapper = styled.section`

    padding: 2rem;

    .burgers-container{
      display: grid;  
      grid-gap: 4rem;
      grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));   
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
    }
     .title-container{
      display: flex;
      justify-content:space-between;
     }

     .product-image{
       
      object-fit:cover;
     }

    
    
`