import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';


type QueryProps = {
  allStrapiGallery: {
    nodes: Array<{
      gallery_image: {
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
                sources: Array<{
                  srcSet: string
                  type: string
                  sizes: string
                }>
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
    allStrapiGallery {
      nodes {
        gallery_image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 200,  placeholder: BLURRED, formats: WEBP)
            }
          }
        }
      }
    }
  }
`

const  Gallery :React.FC = () => {
  const queryData:QueryProps = useStaticQuery(query)
  

  let displayGallery = queryData.allStrapiGallery.nodes.map((image,index)=>{
  
      return(
        <div key={index}  className="wrapper">
          <div className="img-container">
          {/* @ts-ignore */}
            <GatsbyImage  image={image.gallery_image.localFile.childImageSharp.gatsbyImageData} alt="x" className='gallery-image'/>
          </div>
        </div>
      )
  })

  
  return (
<Wrapper id="gallery">
    <h2 className="section-title">Need inspiration ? Check out our Gallery</h2>
    <div className="gallery-container">
       {displayGallery}
    </div>
    <Link to="/menu" className="btn-cta">Menu</Link>
</Wrapper>
);
};

export default Gallery;


const Wrapper = styled.section`
  grid-column:  2 /14;
  
  .gallery-container{
    display:  grid;
    /* grid-auto-flow: column; */
    grid-template-columns: repeat(4,1fr);
    grid-gap: 4rem;
    
  

  }
  .wrapper{
    width: 100%;
    min-height:20rem;
    /* border: 5px solid var(--clr-primary-1); */
    border-radius: 1rem;
  }

  .img-container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;

  }
  .gallery-image{
    object-fit: cover;
    transition: var(--transition);

    &:hover{
      transform: scale(1.5);
    }
  }


  a{
    margin: 5rem auto;
    display: block;
    text-align: center;
  
  }


  @media only screen and (max-width:48em) {
    .gallery-container{

    
    grid-template-columns: repeat(2,1fr);
    grid-gap: 1rem;
     }
  }


      /* 480px -  320px  */
      @media only screen and (max-width:30em) {
      h2{
        font-size: 1.6rem;
      }
   
    }
`