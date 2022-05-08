import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../../context/hotburger/HotburgerContext';
import TestimonialCard from './TestimonialCard';


type QueryProps = {
  allStrapiTestimonial: {
    nodes: Array<{
      description: string
      id: string
      name: string
      image: {
        localFile: {
          childImageSharp?: {
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
    allStrapiTestimonial {
      nodes {
        description
        id
        name
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100, formats: WEBP, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`






const  Testimonials :React.FC = () => {

  const queryData:QueryProps = useStaticQuery(query)
  const {state:{message}} = useHotburgerContext();
  console.log(message)

  
  let displayData  =   queryData.allStrapiTestimonial.nodes.map(((data,index) =>{
    const {id,name,description,image}  = data;
       
    return(
      <TestimonialCard  key = {id} name={name} description={description} image={image}/>
    )
 }))

  return (
<Wrapper>
    <h2 className="section-title">What people are saying</h2>
    <div className="container">
        {displayData}
    </div> 
</Wrapper>
);
};

export default Testimonials;


const Wrapper = styled.div`
     grid-column:   2/14;



     h2{
   
      }
`