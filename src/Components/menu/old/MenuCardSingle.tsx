import React from 'react';
import styled from 'styled-components';
import CategoryMenuFilter from './CategoryMenuFilter';


 type QueryProps = {
    allStrapiMenu: {
      nodes: Array<{
        title: string
        price: number
        category: string
        description: string
        id: string
        menu_image: {
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
            url: string
          }
        }
      }>
    }
  
  extensions?: {}
  }

interface Props {
    title: string
    subtitle: string
    queryData:QueryProps
    filterCategoryValue:string
}

const  MenuCardSingle :React.FC<Props> = ({title,subtitle,queryData,filterCategoryValue}) => {

  return (
<Wrapper>
        <h2>{title}</h2>
        <p className="sub-title">{subtitle}</p>
        <div className="grid-container">
        <CategoryMenuFilter queryData={queryData} filterValue ={filterCategoryValue} />
      </div>
</Wrapper>
);
};

export default MenuCardSingle;


const Wrapper = styled.div`
   h2{
      text-align: center;
      font-size: 3.5rem;
      margin: 2rem 0;
    }

    .grid-container{
      display: grid;  
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fill,minmax(30rem,1fr));   
      margin: 0 4rem;
    }



 

    .sub-title{
      text-align: center;
      font-family: var(--ff-primary-3);
      font-weight: 300;
      font-size:2rem;
      margin-bottom: 5rem;
    }


`