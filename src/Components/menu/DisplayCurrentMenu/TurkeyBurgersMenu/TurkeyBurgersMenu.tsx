import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../../../layout/Seo';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';


const query = graphql`
  {
    allStrapiMenu(filter: {category: {eq: "turkey-burger"}}) {
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

const  TurkeyBurgersMenu :React.FC = () => {
  const queryData:QueryProps = useStaticQuery(query)
  const description = "Forget everything you know about turkey burgers. Done? Order one of our Smashingly seasoned turkey burgers packed with flavor, sizzled to order, and prepared with fresh produce on a toasted bun. Turkey burgers just got a makeover! Don’t forget to make it a double for good measure."


  return (
<Wrapper>
<SEO title="Turkey Burgers" description={description}/>
  <ProductPageLayout queryData={queryData} sectionTitle={"Turkey Burgers"} sectionDescription={description}/>
</Wrapper>
);
};

export default TurkeyBurgersMenu;


const Wrapper = styled.div``