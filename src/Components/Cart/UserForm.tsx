import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../util/helpers';
import { ActionTypes } from '../../context/Constants';
import {useNavigate } from "@reach/router";
import uniqid from 'uniqid';



type UserSubmitForm  = { 
  name:string,
  email:string,
  city:string,
  address:string,
  postCode:number,
  phoneNumber:string,
  textarea:string

}



const  UserForm :React.FC = () => {

  const {state:{cart,sessionId,checkout},dispatch} = useHotburgerContext();
  const  navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    getFieldState,
    getValues,
    setError,
    watch,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });


  const onSubmit = (data: UserSubmitForm) => {
    
      
    if (cart.products.length > 0) {
      let userDetails = data;
       const productsData =  cart.products;
        const orderId = uniqid()
        
          const postData = async()=>{
            
            const request = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                productsData ,
                userDetails,
                orderId
              })
            }
              try {

                const res = await fetch("http://localhost:1340/api/orders/create-stripe-session",request)
                const data = await res.json();
              
                if (data) {
          
                const user = { 
                   id:data.session_id,
                  name:userDetails.name,
                  city:userDetails.city,
                  address:userDetails.address,
                  postCode:userDetails.postCode,
                  phoneNumber:userDetails.phoneNumber,
                  orderId:orderId
                }
                  
                  window.localStorage.setItem("session_id",data.session_id) 
                  window.localStorage.setItem("user",JSON.stringify(user))
                  window.location.href = data.url
                  
                }
                
              } catch (error) {
                  console.log(error)
              }    
        
    }
    postData()
    // console.log(JSON.stringify(data, null, 2));
  };
 }

 const editOrderHandler = () =>{
     dispatch({type:ActionTypes.CHECKOUT_INDENT , payload:!checkout})
 }


 return (
  <Wrapper>
    
    <h2>Delivery information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-column">
          <div className="label-container">
            <label htmlFor="name">Name</label>
            <span className="text-required">*All Fields Required</span>
          </div>
          <input type="text"  {...register('name')}  className={`form-control ${errors.name ? 'is-invalid' : ''}`}  />
           {errors.name  ? <p className="error-text">{errors.name.message}</p>   :  <p className="error-ghost">No Error</p>}    
        </div>
        <div className="form-column">
           {/* <label htmlFor="Email">Email</label>
            <input  type="email"  {...register('email')}  className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
            {errors.email  ? <p className="error-text">{errors.email.message}</p>   :  <p className="error-ghost">No Error</p>}    */}
        </div>
        <div className="form-column">
           <label htmlFor="City">City</label>
            <input type="text"    {...register('city')}  className={`form-control ${errors.city ? 'is-invalid' : ''}`} />
            {errors.city  ? <p className="error-text">{errors.city.message}</p>   :  <p className="error-ghost">No Error</p>}   
        </div>
        <div className="form-column">
           <label htmlFor="address">Delivery Address</label>
            <input type="text"     {...register('address')}   className={`form-control ${errors.address ? 'is-invalid' : ''}`}/>
            {errors.address  ? <p className="error-text">{errors.address.message}</p>   :  <p className="error-ghost">No Error</p>}   
        </div>
        <div className="form-column">
           <label htmlFor="Post Code">Post Code</label>
            <input type="number"     {...register('postCode')} className={`form-control ${errors.postCode ? 'is-invalid' : ''}`}/>
            {errors.postCode  ? <p className="error-text">Post code must be at least 4 digits</p>   :  <p className="error-ghost">No Error</p>}  
        </div>
        <div className="form-column">
           <label htmlFor="Telephone  Number">Telephone  Number</label>
            <input type="number"    {...register('phoneNumber')}   className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} />
            {errors.phoneNumber  ? <p className="error-text">Please enter a valid phone number</p>   :  <p className="error-ghost">No Error</p>}  
        </div>
        <h3>Special Delivery Instructions</h3>
        <div className="label-container">
            <label htmlFor="Your Message">Your Message</label>
            <span  className="text-required">Optional</span>
        </div>
          <textarea     ></textarea>
            <button className="btn-cta" type="submit"  >Create Order</button>
            <button className="btn-ghost" onClick={editOrderHandler}>Edit order</button>
      </form>
  
  </Wrapper>
  );
  };
  
  export default UserForm;


  const Wrapper = styled.div`
  border-radius : 5px;
  background-color:var(--clr-background-menu);
  /* grid-column: 2/7; */
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
    margin: 1rem 0;
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