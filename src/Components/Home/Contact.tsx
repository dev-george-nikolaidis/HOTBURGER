import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const  Contact :React.FC = () => {




  const submitForm = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    console.log("clicked")
  }

  return (
<Wrapper id="contact">

      <h2 className="section-title">Contacts us</h2>
      <div className="container">
        <div className="modal"></div>
        <StaticImage src="../../assets/images/contact-background.png" alt="" className="background-image" />
        <form  className="form" >
           <label htmlFor="Name">Name*</label>
            <input type="text" className="name" />
           <label htmlFor="Name">Email*</label>
            <input type="email" className="email" />
           <label htmlFor="message">Message*</label>
            <textarea  />
            <button className="btn-cta" type="submit" onClick={(e)=>submitForm(e)}>Send message</button>
        </form>
      </div>
</Wrapper>
);
};

export default Contact;


const Wrapper = styled.section`
grid-column:  full-start/full-end;
 
.container{

  position: relative;
}

.background-image{
   max-width: 100%;
    min-height: 70rem;
    display: block;
}

 
.form{
  position: absolute;
    
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    z-index: 2;
    /* background: red; */
    min-height: 50rem;
    width: 40rem;
    
}

  label{ 
    display: block;
    font-family: var(--ff-primary-2);
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom:0.5rem;
    
  }

  input{
    padding: 1rem;
    width: 100%;
    margin-bottom: 4rem;
    border-radius: 0.5rem;
  }

  textarea{
    display: block;
    width: 100%;
    height:10rem;
    margin-bottom: 4rem;
    resize: none;
    border-radius: 0.5rem;
    
  
  }

  button{
    display: block;
    width: 100%;
    border: 1px solid var(--clr-primary-1);
  }

`