import React, { useState } from 'react';
import styled from 'styled-components';

const  UserDetails :React.FC = () => {
  const [userDetails ,setUserDetails] = useState({
    name:"",
    email:"",
    city:"",
    address:"",
    phone_number:0,
    post_code:0,
    special_instructions:""


  })
// onsubmit we will save the user in frond and send request to back when we press create order

 const  onChangeHandler = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
   const value =  e.currentTarget.value
    setUserDetails({
      ...userDetails,
      [e.currentTarget.name]:value
    })
  }
  console.log(userDetails)
  return (
<Wrapper>
  <h2>Delivery information</h2>
    <form>
    <div className="form-column">
        <div className="label-container">
          <label htmlFor="name">Name</label>
          <span>*All Fields Required</span>
        </div>
        <input type="text" name="name" onChange={(e=>onChangeHandler(e))} />
        {/* Display errors or success messages /green or red on submission*/}
      </div>
      <div className="form-column">
         <label htmlFor="Email">Email</label>
          <input type="email" name="email" onChange={(e=>onChangeHandler(e))} />
       {/* Display errors or success messages /green or red on submission*/}
      </div>
      <div className="form-column">
         <label htmlFor="City">City</label>
          <input type="text" name="city" onChange={(e=>onChangeHandler(e))} />
       {/* Display errors or success messages /green or red on submission*/}
      </div>
      <div className="form-column">
         <label htmlFor="address">Delivery Address</label>
          <input type="text" name="address" onChange={(e=>onChangeHandler(e))} />
       {/* Display errors or success messages /green or red on submission*/}
      </div>
      <div className="form-column">
         <label htmlFor="Post Code">Post Code</label>
          <input type="number" name="post_code" onChange={(e=>onChangeHandler(e))} />
       {/* Display errors or success messages /green or red on submission*/}
      </div>
      <div className="form-column">
         <label htmlFor="Cellphone Number">Cellphone Number</label>
          <input type="text" name="phone_number" onChange={(e=>onChangeHandler(e))} />
       {/* Display errors or success messages /green or red on submission*/}
      </div>
      <h3>Special Delivery Instructions</h3>
      <div className="label-container">
          <label htmlFor="Your Message">Your Message</label>
          <span>Optional</span>
      </div>
        <textarea name="special_instructions"   onChange={(e=>onChangeHandler(e))}  ></textarea>
        <p>{userDetails.special_instructions.length}/500</p>
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
      height: 88rem;

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

`