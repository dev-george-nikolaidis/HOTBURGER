import { graphql, useStaticQuery } from 'gatsby';

import React from 'react';
import styled from 'styled-components';
import line from "../../../../assets/images/line.png"
import SEO from '../../../layout/Seo';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';





const query = graphql`
{
  allStrapiMenu(filter: {category: {eq: "beef-burger"}}) {
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

const  BeefBurgersMenu :React.FC = () => {
  const queryData:QueryProps = useStaticQuery(query)
  const description = "Our signature burgers are always freshly made, hand-smashed to order with 100% Certified Angus Beef that is grass fed and supports local farms. Equipped with the freshest ingredients, no two burgers are alike – from sweet-seekers, smokehouse flavor fans, heat champions, and folks just looking for a tasty classic, we’ve got you covered."




  return (
<Wrapper> 
  <SEO title="Signature Burgers" description={description}/>
    <ProductPageLayout queryData={queryData} sectionTitle={"Signature Burgers"} sectionDescription={description}/>
</Wrapper>
);
};

export default BeefBurgersMenu;


const Wrapper = styled.section`

 
`