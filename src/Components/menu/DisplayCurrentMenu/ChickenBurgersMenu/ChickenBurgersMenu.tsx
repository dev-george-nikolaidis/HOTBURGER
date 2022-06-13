import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';

const query = graphql`
  {
    allStrapiMenu(filter: {category: {eq: "chicken-burger"}}) {
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

const  ChickenBurgersMenu :React.FC = () => {
  const queryData:QueryProps = useStaticQuery(query)
  const description = "We understand the need to mix things up, which is why we offer a grilled chicken alternative to our Smashburger patties. Fuel up with our all-natural, grilled chicken breast, made to order and served atop a freshly toasted bun with crisp produce."



  return (
<Wrapper>
    <ProductPageLayout queryData={queryData} sectionTitle={"Grilled Chicken Burgers"} sectionDescription={description}/>
</Wrapper>
);
};

export default ChickenBurgersMenu;


const Wrapper = styled.div``
