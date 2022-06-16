import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMinusCircle ,FiPlusCircle} from "react-icons/fi";
import { useHotburgerContext } from '../../../../context/hotburger/HotburgerContext';
import { ActionTypes } from '../../../../context/Constants';
import uniqid from 'uniqid';

interface ModalButtonsProps{
    temperature:string | null,
    title:string,
    price:number,
    message:string ,
    imageUrl:string,
    resetClickedItem:any
   
}

const  ModalButtons :React.FC<ModalButtonsProps> = ({temperature,message,resetClickedItem,imageUrl,price,title}) => {
    const {state:{menuCategory},dispatch} = useHotburgerContext()

    const [quantity, setQuantity] = useState(1);
    // console.log( temperature)

    const minusClickHandler =() =>{
         quantity > 1 && setQuantity(quantity - 1) 
    }

    const btnClickHandler = () =>{
            dispatch({type:ActionTypes.ADD_ITEM_TO_CART ,payload:{
                item:{
                    title:title,
                    image:imageUrl,
                    message:message,
                    price:price,
                    temperature:temperature,
                    quantity:quantity,
                    id:uniqid()


                },
                price:price,
                quantity:quantity

            }})
            resetClickedItem();
    }


  return (
<Wrapper>
     <div className="buttons-container">
          <h3>{quantity}</h3>
          <FiMinusCircle  className="icon-minus icons" onClick={minusClickHandler}/>
          <FiPlusCircle className="icon-plus icons" onClick={()=>setQuantity(quantity + 1)}/>
           <label htmlFor="quantity">Quantity</label>
     </div>
     <button className= {temperature !== null ? "btn-cta" : "btn-cta btn-disabled"} disabled = { temperature ? false: true } onClick={btnClickHandler}> Add to cart</button> 
     
</Wrapper>
);
};

export default ModalButtons;


const Wrapper = styled.div`
  display: flex;
  background-color:#FFF;
  /* position: sticky; */
  /* bottom:0; */

 
  

  

.buttons-container{
    position: relative;
    border: 1px solid #2A1B0D;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem;
    border-radius:5px;
}

h3{
    font-size:2.5rem;
}

.icons{
    font-size:4rem;
    transition: var(--transition);
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
}


.icon-minus{
    margin:0 2rem 0 auto;

   &:hover{
       color:var(  --clr-error-1);
       background-color:#dfdfdf;
       transform: scale(1.05);
   } 
}


.icon-plus{
    &:hover{
       color:var(--clr-success);
       background-color:#dfdfdf;
       transform: scale(1.05);
   } 
}

label{
   position:absolute;
  top:-1.2rem;
  left:2rem;
  font-size:2rem;
  background-color:white;
  font-weight: bold;
}

button{
    flex: 1;
    margin-left: 2rem;

}

.btn-disabled{
    background-color: #8b8b8b;
    pointer-events: none;
}
`