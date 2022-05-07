
import React from 'react';
import { graphql,useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import CategoriesCard from './CategoriesCard';



 export type QueryProps = {

  allStrapiCategory: {
    totalCount: number
    nodes: Array<{
      category_image: {
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
      title: string
    }>
  }

extensions?: {}
}

 const query = graphql`
  {
    allStrapiCategory {
      totalCount
      nodes {
        category_image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: WEBP, placeholder: BLURRED, width: 100)
            }
          }
        }
        title
      }
    }
  }
`




const  Categories :React.FC = () => {
  const queryData:QueryProps = useStaticQuery(query)

  
  let displayData  =   queryData.allStrapiCategory.nodes.map(((data,index) =>{
     const {title,category_image}  = data;
        
     return(
       <CategoriesCard title={title} imageData= {category_image} />
     )
  }))



  return (
<Wrapper>
      <h2>Check out our menu categories</h2>
      <div className="container">
          {displayData}
      </div>
</Wrapper>
);
};

export default Categories;


const Wrapper = styled.section`
  grid-column:  2 /14;
 
  /* margin-top:var(--margin-section-top) */
      h2{
          text-align: center;
          margin: 10rem 0;
          font-size: 2.8rem;
          letter-spacing: 0.4rem;
          font-family: var( --ff-primary-1);
          font-weight: 600;
      }

      .container{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem ;
      }

      .gatsby-image-wrapper{
        position:absolute;
      }
`