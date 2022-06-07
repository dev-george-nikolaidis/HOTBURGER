import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { ActionTypes } from '../../context/Constants';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import { Schema} from '../../util/helpers';







const  UserDetails :React.FC = () => {
  const {state:{cart,isCartEmpty},dispatch} = useHotburgerContext();


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
 
        let nameError:string
        let emailError: string;
        let cityError: string;
        let addressError: string;
        let postCodeError: string;
        let phoneNumberError :string;
       
        
       
        err.errors.find((el:any)=>{

          console.log(el)
          if (el.includes("Name")) {
            nameError = el
          }
          if (el.includes("Email")) {
            emailError = el
          }
          if (el.includes("City")) {
            cityError = el
          }

          if (el.includes("Address")) {
            addressError = el
          }
          if (el.includes("Post code")) {
            postCodeError = el
          }
          if (el.toLowerCase().includes("phone number")) {
            phoneNumberError = el
          }

          setErrors({
              name:nameError,
              email:emailError,
              city:cityError,
              address:addressError,
              postCode:postCodeError,
              phoneNumber:phoneNumberError
              

          })
        })
        
      })

  // console.log("line 85", errors )
      if (cart.products.length === 0) {
        alert("Please add a product to your cart!")
        return;
      }

      console.log("continue?")
  }

  // console.log(userDetails)

  return (
<Wrapper>
  <h2>Delivery information</h2>
    <form onSubmit={(e)=>submitHandler(e)}>
    <div className="form-column">
        <div className="label-container">
          <label htmlFor="name">Name</label>
          <span>*All Fields Required</span>
        </div>
        <input type="text" name="name" onChange={(e=>onChangeHandler(e))} className={errors.name &&"error"}/>
         <p>{errors.name  &&  errors.name}</p>
      </div>
      <div className="form-column">
         <label htmlFor="Email">Email</label>
          <input type="email" name="email" onChange={(e=>onChangeHandler(e))}  className={errors.email &&"error"}/>
          <p>{errors.email && errors.email}</p>
      </div>
      <div className="form-column">
         <label htmlFor="City">City</label>
          <input type="text" name="city" onChange={(e=>onChangeHandler(e))} className={errors.city &&"error"} />
          <p>{errors.city && errors.city}</p>
      </div>
      <div className="form-column">
         <label htmlFor="address">Delivery Address</label>
          <input type="text" name="address" onChange={(e=>onChangeHandler(e))}  className={errors.name &&"error"}/>
          <p>{errors.address && errors.address}</p>
      </div>
      <div className="form-column">
         <label htmlFor="Post Code">Post Code</label>
          <input type="number" name="postCode" onChange={(e=>onChangeHandler(e))}  className={errors.name &&"error"}/>
          <p>{errors.postCode && errors.postCode}</p>
      </div>
      <div className="form-column">
         <label htmlFor="Telephone  Number">Telephone  Number</label>
          <input type="text" name="phoneNumber" onChange={(e=>onChangeHandler(e))} className={errors.name &&"error"} />
          <p>{errors.phoneNumber && errors.phoneNumber}</p>
      </div>
      <h3>Special Delivery Instructions</h3>
      <div className="label-container">
          <label htmlFor="Your Message">Your Message</label>
          <span>Optional</span>
      </div>
        <textarea name="specialInstructions"   onChange={(e=>onChangeHandler(e))}   ></textarea>
        <span>{userDetails.specialInstructions.length}/500</span>
           
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

      input{
        width: 100%;
        height: 4rem;
        margin: 1rem 0;
        /* border-radius:5px; */
      }

      h3{
        font-size: 2.5rem;
        margin: 5rem 0 1rem 0;
      }

      textarea{
        width: 100%;
        height:10rem;
        resize: none;
        margin: 1rem 0;
      }

      button{
        margin-top: 2rem;
      }

      .error{
        border: 1px solid var(--clr-error-1);
      }

      p{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color:var(--clr-error-1);
      }

`