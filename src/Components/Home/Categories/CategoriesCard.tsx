import React from 'react';
import styled from 'styled-components';
import { GatsbyImage} from 'gatsby-plugin-image';

import { QueryProps } from './Categories';
import { Link } from 'gatsby';

interface Props {
  title: string;
  imageData:{ 
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
}

const  CategoriesCard :React.FC<Props> = ({title,imageData}) => {

   

  return (
<Wrapper>
    {/* <div className="modal"></div> */}
    <Link to={title.toLocaleLowerCase()}>
      <h5>{title}</h5>
      {/* @ts-ignore */}
      <GatsbyImage image={imageData.localFile.childImageSharp.gatsbyImageData} alt={`${title} image`}  styles={{width:"100%"}}/> 
    
    </Link>
</Wrapper>
);
};

export default CategoriesCard;


const Wrapper = styled.div`
  min-height: 30rem;
  position: relative;
  border: 5px solid var(--clr-primary-1);
  border-radius:10px;

  /* background-color: red; */
  a{
    /* background: #eee; */
    width: 100%;
    height: 100%;
    display: block;

  }
  img{ 
   width: 100%;
    
  
  } 

  h5{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    z-index: 3;
    text-transform: uppercase;
    font-family: var(--ff-primary-3);
    color: #fff;
    font-size: 1.6rem;
    letter-spacing: 0.3rem;
  }

  .modal{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: var(--clr-modal-1);
  }


`

