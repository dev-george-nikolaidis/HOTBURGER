import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';



const query = graphql`
  {
    allStrapiMenu(filter: {category: {eq: "Beverages"}}) {
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
            url
          }
        }
      }
    }
  }
`


const  Beverages :React.FC = () => {
    const queryData:QueryProps = useStaticQuery(query)
    const description = "Whether you quench your thirst with one of our refreshing Coca Cola® products, a frothy brew from our expansive beer selection, or are craving the fizz of a crisp White Claw®, we have a smashing match for your every mood. Selection will vary by location."
  
  return (
<Wrapper>
    <ProductPageLayout queryData={queryData} sectionTitle={"Beverages"} sectionDescription={description}/>
</Wrapper>
);
};

export default Beverages;


const Wrapper = styled.div``