import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


interface Props{
  
  name:string,
  description:string,
  image:{
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

}


const  TestimonialCard :React.FC<Props> = ({name,description,image}) => {



  return (
<Wrapper>
        <div className="card-container">
            {/* @ts-ignore */}
          <GatsbyImage image = {image.localFile.childImageSharp?.gatsbyImageData} alt={name} className="testimonial-image"/>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
    
</Wrapper>
);
};

export default TestimonialCard;


const Wrapper = styled.div`
 
    text-align: center;
    background-color:#010101;
    min-height: 45rem;
    border: 5px solid var(--clr-primary-1);
    border-radius: 1rem;


  .card-container{
    padding:2.5rem;
    height:100%;
  }


  .testimonial-image{
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }


  h4{
       font-size:2.5rem;
       font-family: var(--ff-primary-3);
        color:rgba(255,255,255,0.5);
        padding: 2rem 0;
  }

  p{
      font-size: 2.3rem;
      font-family: var(--ff-primary-2);
      letter-spacing: 0.2rem;
  }
  

     /* 480px -  320px  */
     @media only screen and (max-width:30em) {
        width: 100%;
      
    .card-container{
      padding:1rem;
     
      } 
      p{
      font-size: 1.6rem;
      font-family: var(--ff-primary-2);
      letter-spacing: 0.2rem;
  }
    }
`