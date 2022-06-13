import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';

const query = graphql`
  {
    allStrapiMenu(filter: {category: {eq: "kid-menu"}}) {
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

const  KidsMenu :React.FC = () => {
    const queryData:QueryProps = useStaticQuery(query)
    const description = "Kids deserve a menu of their own, which is why we whip up kid-friendly options to please even the pickiest eaters. Served with regular French fries and their choice of regular fountain drink, organic milk or juice."
  
  return (
<Wrapper>
<ProductPageLayout queryData={queryData} sectionTitle={"Kids Meals"} sectionDescription={description}/>
</Wrapper>
);
};

export default KidsMenu;


const Wrapper = styled.div``