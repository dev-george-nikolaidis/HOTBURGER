import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../../../layout/Seo';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';



const query = graphql`
{
  allStrapiMenu(filter: {category: {eq: "bean-burger"}}) {
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

const  BeanBurgersMenu :React.FC = () => {
    const queryData:QueryProps = useStaticQuery(query)
    const description = "Calling all vegetarians and black bean burger-lovers! Treat yourself to one of Smashburger’s black bean burger options. Crafted to tasty perfection, our black bean burgers are loaded with fresh produce and cradled by a toasted bun – Smashed it."
  
  
  return (
<Wrapper>
    <SEO title="Black Bean Burgers" description={description}/>
    <ProductPageLayout queryData={queryData} sectionTitle={"Black Bean Burgers"} sectionDescription={description}/>
</Wrapper>
);
};

export default BeanBurgersMenu;


const Wrapper = styled.div``