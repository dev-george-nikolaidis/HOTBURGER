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
          {/* @ts-ignore */}
            <GatsbyImage  image={image.gallery_image.localFile.childImageSharp.gatsbyImageData} alt="x" className='gallery-image'/>
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
    grid-template-columns: repeat(3,1fr);
    grid-gap: 4rem;
    
  

  }
  .wrapper{
    width: 100%;
    min-height:30rem;
    border: 5px solid var(--clr-primary-1);
    border-radius: 1rem;
  }


  .gallery-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  a{
    margin: 5rem auto;
    display: block;
    text-align: center;
  
  }
`