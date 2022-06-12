// import { graphql, useStaticQuery } from 'gatsby';
// import React from 'react';
// import styled from 'styled-components';
// import { ActionTypes, MenuProductCategory } from '../../context/Constants';
// import { QueryProps } from './CategoryMenuFilter';
// import MenuCardSingle from './MenuCardSingle';






// const query = graphql`
// {
//   allStrapiMenu {
//     nodes {
//       title
//       price
//       category
//       description
//       id
//       menu_image {
//         localFile {
//           url
//           childImageSharp {
//             gatsbyImageData(formats: WEBP, placeholder: TRACED_SVG, width: 200)
//           }
//         }
//       }
//     }
//   }
// }
// `



// const  MenuCard :React.FC = () => {

  
//   const queryData:QueryProps = useStaticQuery(query)



//   return (
// <Wrapper> 
//         <MenuCardSingle  filterCategoryValue={MenuProductCategory.MEAT_BURGER} title='Burgers' queryData={queryData} subtitle="All beef is 100% certified Angus beef from Aspen Ridge" />
//         <MenuCardSingle filterCategoryValue={MenuProductCategory.PLANT_BURGER}  title='Plant Base Burgers' queryData={queryData} subtitle="Vegan & veggie-friendly menu exclusively crafted with the Impossible Burger on Vegan Bun" />
//         <MenuCardSingle filterCategoryValue={MenuProductCategory.CHICKEN} title='Chicken' queryData={queryData} subtitle="All sandwiches are made with all-natural chicken breast" />
//         <MenuCardSingle  filterCategoryValue={MenuProductCategory.WINGS}  title='Wings' queryData={queryData} subtitle="Delicious chicken wings made with extra love for our  customers" />
// </Wrapper>
// );
// };

// export default MenuCard;


// const Wrapper = styled.section`
  
//      grid-column: 2 / 14;
//     width: 100%;
//     margin-bottom: 5rem;
//     background-color:var(--clr-background-menu);
//     border-radius: 5px;
//     color:var(--clr-text-1);
  
    
   
   



// `