import React, { useState } from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../../context/hotburger/HotburgerContext';
import { AiFillCloseCircle } from "react-icons/ai";
import ModalButtons from './modals/ModalButtons';


interface Props{ 
    resetClickedItem:any
  
  }
  

const  ProductPageModal :React.FC<Props>  = ({resetClickedItem}) => {
    const {state:{currentItemClicked}} = useHotburgerContext()
    const {title,imageUrl,description,price} = currentItemClicked;

    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
      document.body.style.overflow = 'hidden';
    }
    
    const [message , setMessage] = useState("");

    


  return (
<Wrapper>
<div className="modal-popup"> </div>
      <div className="model-container">
          <AiFillCloseCircle className="icon-close" onClick={resetClickedItem}/>
          <div className="image-container">

          <img src={imageUrl} alt={title} />
          </div>
           <div className="title-container">
              <h2>{title}</h2>
              <p className="price">${price}</p>
           </div>
          <p className="description">{description}</p>
         
         
            <div className="subtitle-container">
            <h3>Special Request</h3>
             <p className="optional-text">Optional</p>
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
          
          <ModalButtons 
          title = {title}
          price = {price}
          imageUrl = {imageUrl}
          temperature = {null}
           message={message} 
           resetClickedItem={resetClickedItem}
         
           />
         
      </div>
</Wrapper>
);
};

export default ProductPageModal;


const Wrapper = styled.div`
  /* width: 100%; */
  
.icon-close{
    font-size:3rem;
    position: fixed;
    top: 0rem;
    right: 0rem;
    margin: 1rem;
    transition:var(--transition);
    padding: 0.4rem;
    border-radius: 50%;
    
    &:hover{
      color:var(--clr-error-1);
      background-color:#dfdfdf;
      transform: scale(1.05);
      
      
    }
  }

  .title-container{
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin: 2rem 0;
  }

  .price{
    font-size: 2.5rem;
  }
  .image-container{
    /* height: ; */
  }
  img{
    width: 100%;
    height: 32rem;
  }

  h2{
     
      font-size: 3.5rem;
      
  }

  .description{
    font-size:2.5rem;
    margin-bottom: 1rem;
    margin: 2rem 0;
  }

  hr{
    border: 1px dotted #2A1B0D;
    margin: 2.2rem 0;
  }


  .subtitle-container{
    display: flex;
    justify-content:space-between;
    align-items:center;

    h3{
      font-size:1.8rem;
    }

    p{
      font-size: 1.6rem;
      padding: 1rem;
      background-color: var(--clr-primary-1);
      border-radius:10px;
    }
  }



  textarea{
    width: 100%;
    height: 15rem;
    margin: 2rem 0 4rem 0;
    resize: none;
  }


       /* 1024px - 769px  */
       @media only screen and (max-width:64em) {


       }

      /*768px - 481px */
      @media only screen and (max-width:48em) {
        h2{
     
        font-size: 2rem;
          
      }
          .price{
        font-size: 2rem;
      }

      .description{
        font-size:1.8rem;
     
        margin: 2rem 0;
      }

        img{

      height: 24rem;
    }
    
      }


  /* 480px -  320px  */
  @media only screen and (max-width:30em) {
    h2{
        font-size: 1.6rem;
      }
          .price{
        font-size: 1.8rem;
      }

      .description{
        font-size:1.4rem;
     
        margin: 2rem 0;
      }

        img{
      height: 14rem;
       }
       h3{
        font-size:1rem;
       }
      .model-container{
        width: 90%;
        padding:2rem 0.4rem;
      }
    }
`