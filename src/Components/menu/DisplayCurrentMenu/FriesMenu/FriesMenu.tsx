import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProductPageLayout, { QueryProps } from '../ProductPageLayout';



const query = graphql`
{
  allStrapiMenu(filter: {category: {eq: "fries"}}) {
    nodes {
      title
      slug
      id
      price
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



const  FriesMenu :React.FC = () => {
    const queryData:QueryProps = useStaticQuery(query)
    const description = "Every burger deserves a worthy accompaniment, which is why our sides bring the same level of culinary oomph to the table as our delectable entrees. Prefer a sharable approach? Order a side of fries with your tots – we’re not here to judge! Whether you choose the brussel sprouts, our sweet potato fries, or a side salad, there’s something for everyone.”"
  
  
  
    return (
  <Wrapper>
      <ProductPageLayout queryData={queryData} sectionTitle={"Fries & Sides"} sectionDescription={description}/>
  </Wrapper>
  );
  };

export default FriesMenu;


const Wrapper = styled.div``