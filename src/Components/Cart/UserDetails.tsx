import React, { useState } from 'react';
import styled from 'styled-components';
// import * as yup from 'yup';
import { ActionTypes } from '../../context/Constants';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import { checkForErrors, Schema} from '../../util/helpers';


interface Errors {
  name:string,
  email:string,
  city:string,
  address:string,
  postCode:number,
  phoneNumber:string,
}




const  UserDetails :React.FC = () => {
  const {state:{cart},dispatch} = useHotburgerContext();


  const [userDetails ,setUserDetails] = useState({
    name:"",
    email:"",
    city:"",
    address:"",
    postCode:0,
    phoneNumber:0,
    specialInstructions:""


  })

 

  const[ errors, setErrors] = useState({
    name:"",
    email:"",
    city:"",
    address:"",
    postCode:"",
    phoneNumber:"",
    
    
  })

console.log("remount")

// onsubmit we will save the user in frond and send request to back when we press create order

 const  onChangeHandler = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
   const value =  e.currentTarget.value
  
    setUserDetails({
      ...userDetails,
      [e.currentTarget.name]:value
    })
  }


  const submitHandler =  (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

      Schema.validate({
        name:userDetails.name,
        email:userDetails.email,
        city:userDetails.city,
        address:userDetails.address,
        postCode:userDetails.postCode,
        phoneNumber:userDetails.phoneNumber,
    

      },{
        abortEarly:false
      }).catch(err=>{
        checkForErrors(err,setErrors,errors)
      })
     
      // console.log(Object.values(errors))
     console.log(errors)

      if (cart.products.length === 0) {
          console.log("We return no products!")
          return;
      }
  


      
      if (errors.name === undefined && errors.email === undefined && errors.address === undefined && errors.city === undefined && errors.postCode === undefined && errors.phoneNumber === undefined) {
        console.log("form submitted!")
        
      }
      

  }



 

  return (
<Wrapper>
  <h2>Delivery information</h2>
    <form onSubmit={(e)=>submitHandler(e)}>
    <div className="form-column">
        <div className="label-container">
          <label htmlFor="name">Name</label>
          <span className="text-required">*All Fields Required</span>
        </div>
        <input type="text" name="name" onChange={(e=>onChangeHandler(e))} className={errors.name &&"error"}/>
         {errors.name  ? <p className="error-text">{errors.name}</p>   :  <p className="error-ghost">No Error</p>}
      </div>
      <div className="form-column">
         <label htmlFor="Email">Email</label>
          <input type="email" name="email" onChange={(e=>onChangeHandler(e))}  className={errors.email &&"error"}/>
          {errors.email ? <p className="error-text">{errors.email}</p> :<p className="error-ghost">No Error</p>}
      </div>
      <div className="form-column">
         <label htmlFor="City">City</label>
          <input type="text" name="city" onChange={(e=>onChangeHandler(e))} className={errors.city &&"error"} />
          {errors.city ? <p className="error-text">{ errors.city}</p> : <p className="error-ghost">No Error</p>}
      </div>
      <div className="form-column">
         <label htmlFor="address">Delivery Address</label>
          <input type="text" name="address" onChange={(e=>onChangeHandler(e))}  className={errors.name &&"error"}/>
          {errors.address ?  <p className="error-text">{ errors.address }</p> :<p className="error-ghost">No Error</p>}
      </div>
      <div className="form-column">
         <label htmlFor="Post Code">Post Code</label>
          <input type="number" name="postCode" onChange={(e=>onChangeHandler(e))}  className={errors.name &&"error"}/>
          {errors.postCode ?  <p className="error-text">{errors.postCode }</p> :  <p className="error-ghost">No Error</p>}
      </div>
      <div className="form-column">
         <label htmlFor="Telephone  Number">Telephone  Number</label>
          <input type="text" name="phoneNumber" onChange={(e=>onChangeHandler(e))} className={errors.name &&"error"} />
         {errors.phoneNumber ?  <p className="error-text">{errors.phoneNumber}</p>:<p className="error-ghost">No Error</p> }
      </div>
      <h3>Special Delivery Instructions</h3>
      <div className="label-container">
          <label htmlFor="Your Message">Your Message</label>
          <span  className="text-required">Optional</span>
      </div>
        <textarea name="specialInstructions"   onChange={(e=>onChangeHandler(e))}   ></textarea>
        <p  className="text-required">{userDetails.specialInstructions.length}/500</p>
           
        <button className="btn-cta" type="submit">Create Order</button>
    </form>

</Wrapper>
);
};

export default UserDetails;


const Wrapper = styled.div`
       border-radius: 5px;
      background-color:var(--clr-background-menu);
      grid-column: 2/7;
      color:var(--clr-title-2); 
      height: 100%;

      h2{
        padding: 4rem;
        font-size: 2.5rem;
      }
      label{
        font-size: 1.6rem;
      }
      form{
        padding: 1.5rem 4rem;
        /* background: red; */
        width: 100%;
        border: none;
        box-shadow: none;
        /* color: var(--clr-text-1); */
      }

      .label-container{
        display: flex;
        justify-content:space-between;
   
      }

      .text-required{
        font-size: 1.6rem;
      }

      input{
        width: 100%;
        height: 4rem;
        margin: 0.3rem 0;
        /* border-radius:5px; */
      }

      h3{
        font-size: 2.5rem;
        margin: 3rem 0 1rem 0;
      }

      textarea{
        width: 100%;
        height:10rem;
        resize: none;
        margin: 1rem 0;
      }

      button{
        margin: 2rem 0;
        width: 100%;
      }

      .error{
        border: 1px solid var(--clr-error-1);
      }

      .error-text{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color:var(--clr-error-1);
      }


      .error-ghost{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        opacity: 0;


      
      }
`