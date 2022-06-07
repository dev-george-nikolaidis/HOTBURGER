import React from 'react';
import styled from 'styled-components';
import {Formik, Form,useFormik ,FormikHelpers,FormikProps,Field,FieldProps} from "formik"


interface FormValues  {


     name:string;
    email:string;
    city:string;
    address:string
    phone_number:string
    post_code:number
    special_instructions:string
     
}


const  UserDetailsForm:React.FC  = () => {

    
     const   initialValues:FormValues = {
        name:"",
        email:"",
        city:"",
        address:"",
        phone_number:"",
        post_code:0,
        special_instructions:""
    }
        

  
  
  return (
<Wrapper>
    <Formik 
    initialValues={initialValues}
    onSubmit={(values, actions) => {

        console.log({ values, actions });

        alert(JSON.stringify(values, null, 2));

        actions.setSubmitting(false);

      }}>

   <Form >
    <div className="form-column">
        <div className="label-container">
          <label htmlFor="name">Name</label>
          <span>*All Fields Required</span>
        </div>
        <Field  type="text" name="name" id="name"  />
     
      </div>
      <div className="form-column">
         <label htmlFor="Email">Email</label>
          <Field  type="email" name="email" id="email" /> 
      
      </div>
      <div className="form-column">
         <label htmlFor="City">City</label>
          <input type="text" name="city" id="city" />
        
      </div>
      <div className="form-column">
         <label htmlFor="address">Delivery Address</label>
          <input type="text" name="address" id="address" />
   
      </div>
      <div className="form-column">
         <label htmlFor="Post Code">Post Code</label>
          <input type="number" name="post_code" id="post_code" />
     
      </div>
      <div className="form-column">
         <label htmlFor="Telephone  Number">Telephone  Number</label>
          <input type="text" name="phone_number" id="phone_number" />
     
      </div>
      <h3>Special Delivery Instructions</h3>
      <div className="label-container">
          <label htmlFor="Your Message">Your Message</label>
          <span>Optional</span>
      </div>
        <textarea name="special_instructions"  id="special_instructions"></textarea>
        {/* <p>{userDetails.special_instructions.length}/500</p> */}
           
        <button className="btn-cta" type="submit">Create Order</button>
    </Form>
  </Formik>
   
</Wrapper>
);
};

export default UserDetailsForm;


const Wrapper = styled.div``