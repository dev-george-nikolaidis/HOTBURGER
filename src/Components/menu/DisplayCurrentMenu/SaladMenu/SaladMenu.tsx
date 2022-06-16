import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../../../layout/Seo';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';




const query = graphql`
  {
    allStrapiMenu(filter: {category: {eq: "salad"}}) {
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

const  SaladMenu :React.FC = () => {
    const queryData:QueryProps = useStaticQuery(query)
    const description = "Perfected flavor creations are our specialty, and our salads are no exception. We have a strict policy against boring bowls of leaves, so you can rest assured that our salads are just as satisfying as our burgers. Try one today and see for yourself how crisp ingredients and a knack for crafting flavorful bites can yield game-changing salads!"
  
  
  return (
<Wrapper>
  <SEO title="Fresh Salads" description={description}/>
    <ProductPageLayout queryData={queryData} sectionTitle={"Fresh Salads"} sectionDescription={description}/>
</Wrapper>
);
};

export default SaladMenu;


const Wrapper = styled.div``