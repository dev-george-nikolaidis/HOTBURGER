import React from 'react';
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

</Wrapper>
);
};

export default TestimonialCard;


const Wrapper = styled.div``