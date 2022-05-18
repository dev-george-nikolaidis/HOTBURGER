import React from 'react';
import styled from 'styled-components';
import { GatsbyImage} from 'gatsby-plugin-image';
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
    <Link to="/menu" className="absolute">
     <div className="modal"></div>
      <h5>{title}</h5>
      {/* @ts-ignore */}
      <GatsbyImage image={imageData.localFile.childImageSharp.gatsbyImageData} alt={`${title} image`} className="image absolute"  /> 
      
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

 
  a{
    z-index: 3;
    transform: var(--transition);


   &:hover{

    h5{
     padding: 1rem 2rem;
     background-color: var(--clr-primary-1);
      border-radius:var(--radius) ;
   }

   .modal{
    border: 5px solid #fff;
    border-radius:5px;
   }
   } 
  }


  .image{ 
    z-index: 1;
    border-radius: 2px;
    object-fit: cover;
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





`

