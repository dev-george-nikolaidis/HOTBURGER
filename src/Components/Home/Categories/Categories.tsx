
// import React from 'react';
// import { graphql,useStaticQuery } from 'gatsby';
// import styled from 'styled-components';
// import CategoriesCard from './CategoriesCard';



// type QueryProps = {
//   allStrapiCategory: {
//     totalCount: number
//     nodes: Array<{
//       category_image: {
//         localFile: {
//           childImageSharp: {
//             gatsbyImageData: {
//               layout: string
//               placeholder: {
//                 fallback: string
//               }
//               images: {
//                 fallback: {
//                   src: string
//                   srcSet: string
//                   sizes: string
//                 }
//                 sources: Array<any>
//               }
//               width: number
//               height: number
//             }
//           }
//         }
//       }
//       title: string
//     }>
//   }

// extensions?: {}
// }


// const query = graphql`
//   {
//     allStrapiCategory {
//       totalCount
//       nodes {
//         category_image {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(formats: WEBP, placeholder: TRACED_SVG, width: 200)
//             }
//           }
//         }
//         title
//       }
//     }
//   }
// `




// const  Categories :React.FC = () => {
//   const queryData:QueryProps = useStaticQuery(query)

  
//   let displayData  =   queryData.allStrapiCategory.nodes.map(((data,index) =>{
//      const {title,category_image}  = data;
        
//      return(
//        <CategoriesCard title={title} imageData= {category_image} key={index} />
//      )
//   }))



//   return (
// <Wrapper>
//       <h2 className="section-title">Check out our menu categories</h2>
//       <div className="container">
//           {displayData}
//       </div>
// </Wrapper>
// );
// };

// export default Categories;


// const Wrapper = styled.section`
//   grid-column:  2 /14;
 
 
//       h2{
      
//       }

//       .container{
//         display:grid;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 4rem ;
//       }

//       .gatsby-image-wrapper{
//         position:absolute;
//       }
// `