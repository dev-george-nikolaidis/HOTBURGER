import React, { useState } from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../../../context/hotburger/HotburgerContext';
import { AiFillCloseCircle } from "react-icons/ai";

import ModalButtons from '../modals/ModalButtons';


interface MeatBurgerProps{ 
  resetClickedItem:any

}




const  MeatBurgerModal :React.FC<MeatBurgerProps> = ({resetClickedItem}) => {

  const {state:{currentItemClicked}} = useHotburgerContext()
  const {title,imageUrl,description,price} = currentItemClicked;

 
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    document.body.style.overflow = 'hidden';
  }

  const [temperature,setTemperature] = useState<string | null>(null);
  const [message , setMessage] = useState("");

    
  const handleRadioClick = (e:React.MouseEvent<HTMLInputElement>) => {
    
       setTemperature(e.currentTarget.value)
  }

  const ratios = ["Rare","Medium Rare","Medium","Medium Well","Well Done"];
  let displayRatios = ratios.map((ratio,index)=>{

    return(
        <div key={index}>
         <div className="radio-container" >
              <label htmlFor={ratio} >{ratio}</label>
              <input type="radio" name="input"  value={ratio} onClick={handleRadioClick}/>
         </div>
          <hr  />
        </div>
    )
  })

  return (
<Wrapper>
    <div className="modal-popup"> </div>
      <div className="model-container">
          <AiFillCloseCircle className="icon-close" onClick={resetClickedItem}/>
          <img src={imageUrl} alt={title} />
           <div className="title-container">
              <h2>{title}</h2>
              <p className="price">${price}</p>
           </div>
          <p className="description">{description}</p>
           <hr  />
           <div className="subtitle-container">
             <h3>Temperature</h3>
             <p className="required-text">Required</p>
           </div>
            <hr  />
            {displayRatios}
            <div className="subtitle-container">
            <h3>Special Request</h3>
             <p className="optional-text">Optional</p>
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
          
          <ModalButtons 
          title = {title}
          price = {price}
          imageUrl = {imageUrl}
          temperature = {temperature}
           message={message} 
           resetClickedItem={resetClickedItem}
         
           />
         
      </div>
   
</Wrapper>
);
};

export default MeatBurgerModal;


const Wrapper = styled.div`


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

  .radio-container{
    display: flex;
    justify-content:space-between;
    align-items:center;

    label{
      font-size:1.6rem;
    }

    input{
      width: 2rem;
      height: 2rem;
    }
  }

  textarea{
    width: 100%;
    height: 15rem;
    margin: 2rem 0 4rem 0;
    resize: none;
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