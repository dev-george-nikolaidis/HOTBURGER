import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../../../layout/Seo';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';


const query = graphql`
  {
    allStrapiMenu(filter: {category: {eq: "dessert"}}) {
      nodes {
        title
        slug
        id
        description
        category
        price
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

const  DessertsMenu :React.FC = () => {
    const queryData:QueryProps = useStaticQuery(query)
    const description = "Satisfy your sweet tooth with one of our house-blended milkshakes featuring thick and creamy Häagen-Dazs® ice cream. A perfect end to a Smashtastic meal”"
  
  
  
    return (
  <Wrapper> 
         <SEO title="Shakes & Desserts" description={description}/>
      <ProductPageLayout queryData={queryData} sectionTitle={"Shakes & Desserts"} sectionDescription={description}/>
  </Wrapper>
  );
  };

export default DessertsMenu;


const Wrapper = styled.div``