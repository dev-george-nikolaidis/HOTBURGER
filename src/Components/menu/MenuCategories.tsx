import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { ActionTypes } from '../../context/Constants';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import MenuCategoriesList from './MenuCategoriesList';


export type QueryPropsCategory = {
 
    allStrapiCategory: {
      nodes: Array<{
        category: string
        id: string
        title: string
        slug: string
        category_image: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: {
                layout: string
                placeholder: {
                  fallback: string
                }
                images: {
                  fallback: {
                    src: string
                    srcSet: string
                    sizes: string
                  }
                  sources: Array<any>
                }
                width: number
                height: number
              }
            }
          }
        }
      }>
    }
  
  extensions?: {}
}

const query = graphql`
  {
    allStrapiCategory {
      nodes {
        category
        id
        title
        slug
        category_image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: WEBP, width: 200, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`

const  MenuCategories :React.FC = () => {

  const queryData:QueryPropsCategory = useStaticQuery(query)
  const {dispatch,state:{currentMenuCategory}} = useHotburgerContext();

    const onClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
       const currentCategory = e.currentTarget.getAttribute("data-category");
        dispatch({type:ActionTypes.SET_CURRENT_CATEGORY,payload:currentCategory})
    }

    let displayCategories = queryData.allStrapiCategory.nodes.map((cat) =>{
        const {id,category,category_image,slug,title} = cat;
          
        return(
          <div className={currentMenuCategory.toLocaleUpperCase() === category.toLocaleUpperCase() ? "category-container active":"category-container"} key={id} onClick={onClickHandler} data-category={[category]}>
                {/* @ts-ignore */}
                <GatsbyImage image = {category_image.localFile.childImageSharp.gatsbyImageData} alt={title} className="image"  objectFit='fill'/>
               <h2>{title}</h2>
          </div>
        )
    })  

    // console.log(currentMenuCategory)
    
  return (
<Wrapper>
      <span className="displayCategories-grid">
       {displayCategories}
      </span>
      <span className="displayCategories-list">
          <MenuCategoriesList queryData={queryData}/>
      </span>
</Wrapper>
);
};

export default MenuCategories;


const Wrapper = styled.div`
   margin: 2rem 0;

  .category-container{
     text-align: center;
      margin: 2rem;
      background-color: #FCFAF0;
      padding:1rem;
      transition:var(--transition);

      &:hover{
        background-color: #448faf;
      }
  }

  .active{
    background-color: #448faf;
  }

  .image{
    width:15rem;
    height: 15rem;
    display: inline-block;
  }

  h2{
    align-items: center; 
  }

  .displayCategories-list{
    display:none;
  }


      /* 1024px - 769px  */
      @media only screen and (max-width:64em) {
        .displayCategories-grid{
          display: none;
        }
        .displayCategories-list{
          display:block;
        }
                    

        
    }



`