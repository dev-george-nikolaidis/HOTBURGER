import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import TestimonialCard from './TestimonialCard';
import { AiOutlineArrowRight ,AiOutlineArrowLeft} from "react-icons/ai";

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
  const testimonialsMaxLength = queryData.allStrapiTestimonial.nodes.length;


  const [displayStart,setDisplayStart] = useState(0)
  const [displayEnd,setDisplayEnd] = useState(3)
 

  
  
  let displayData  =   queryData.allStrapiTestimonial.nodes.map(((data,index) =>{
    const {id,name,description,image}  = data;
         
      if(index >= displayStart && index <= displayEnd -1){
        return(
          <TestimonialCard  key = {id} name={name} description={description} image={image}/>
          )
        }
    
    
 }))

  const onClickRightHandler = () => {   
    if (displayEnd < testimonialsMaxLength) {
      setDisplayStart(displayStart + 3)
      setDisplayEnd(displayEnd + 3)
    }

  }

  const onClickLeftHandler = () => {
    if (displayStart > 0) {
      setDisplayStart(displayStart - 3)
      setDisplayEnd(displayEnd - 3)
    }

  }

 
  return (
<Wrapper>
    <h2 className="section-title">What people are saying</h2>
    <div className="container">
        {displayData}
    </div> 
    <div className="reviews">
        { displayStart > 0 ?   <AiOutlineArrowLeft className='arrow-left icons' onClick={onClickLeftHandler}/>: null}
        <h5>Check more reviews</h5>
        {displayEnd == testimonialsMaxLength ? null :  <AiOutlineArrowRight  className='arrow-right icons' onClick={onClickRightHandler} />}  
    </div>
</Wrapper>
);
};

export default Testimonials;


const Wrapper = styled.div`
     grid-column:   2/14;

  .container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 4rem;
  }

  .reviews{
    
    margin: 5em;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  h5{
    font-size:2rem;
    margin: 0 4rem;
  }

  .icons{
      font-size: 3.5rem;

    &:hover{
      color:var(--clr-primary-1);

    }
  }

 
`