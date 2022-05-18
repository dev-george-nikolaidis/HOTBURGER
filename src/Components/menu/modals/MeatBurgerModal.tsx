import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../../context/hotburger/HotburgerContext';
import { AiFillCloseCircle } from "react-icons/ai";
import { CustomModelProps } from './Modal';




const  MeatBurgerModal :React.FC<CustomModelProps> = ({resetClickedItem}) => {
  const {state:{currentItemClicked}} = useHotburgerContext()
  document.body.style.overflow = 'hidden';
  const {title,imageUrl,description,price} = currentItemClicked;




  return (
<Wrapper>
    <div className="modal-popup"> </div>
      <div className="model-container">
          <AiFillCloseCircle className="icon-close" onClick={resetClickedItem}/>
          <img src={imageUrl} alt={title} />
          <h2>{title}</h2>
          <p className="description">{description}</p>
          <div className="buttons-container">
            
          </div>
      </div>
   
</Wrapper>
);
};

export default MeatBurgerModal;


const Wrapper = styled.div`


  .icon-close{
    font-size:3rem;
    position: fixed;
    top: 0;
    right: 0;
    margin: 1rem;
    transition:var(--transition);
    padding: 0.4rem;
    border-radius: 50%;
    
    &:hover{
      color:var(--clr-error-1);
      background-color:#000;
      transform: scale(1.05);
      
      
    }
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
  }

`