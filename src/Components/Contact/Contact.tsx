import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {contactFormSchema, getRandomNumberBetween} from "../../util/helpers";
import ContactSuccess from './ContactSuccess';


type UserSubmitForm  = { 
  name:string,
  email:string,
  textarea:string,
  question:string,

}

const value1 = getRandomNumberBetween(1,5)
const value2 = getRandomNumberBetween(1,5)
const total = value1 + value2


const  Contact :React.FC = () => {
  const [response ,setResponse] = useState({
    success:false,
    message:""
  })
  const [questionError, setQuestionError] = useState("")

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
    resolver: yupResolver(contactFormSchema)
  });


  const onSubmit = (formData: UserSubmitForm) => {

          const postData = async()=>{
          
            if (+formData.question != total) {
              setQuestionError("Answer is incorrect, please try again");
              return;
            }
           
            const messagePayload ={
                name:formData.name,
                email:formData.email,
                textarea:formData.textarea
            }

            const request = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                messagePayload
              })
            }
              try {

                const res = await fetch("https://hotburger-app.herokuapp.com/api/contact-form",request)
                const data = await res.json();
              
                if (data) {
                    setResponse({
                      success: data.success,
                      message:data.message
                    })
                  // console.log(data)
                }
                
              } catch (error) {
                  console.log(error)
              }    
        
    }

    postData()

  };
 

  return (
<Wrapper >
    
       {response.success && <ContactSuccess message={response.message}/>}
     
     
      <div className="container">
  
        <div className="modal"></div>
        <StaticImage src="../../assets/images/contact-background.png" alt="" className="background-image"  objectFit='fill'/>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
           <h2 className="section-title">Contacts us</h2>
           <label htmlFor="Name">Name*</label>
           <input type="text"  {...register('name')}  className={`form-control ${errors.name ? 'is-invalid' : ''}`}  />
           {errors.name  ? <p className="error-text">{errors.name.message}</p>   :  <p className="error-ghost">No Error</p>}  

           <label htmlFor="Name">Email*</label>
           <input  type="email"  {...register('email')}  className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
            {errors.email  ? <p className="error-text">{errors.email.message}</p>   :  <p className="error-ghost">No Error</p>}    

           <label htmlFor="message">Message*</label>
            <textarea    {...register('textarea')}   />
            {errors.textarea  ? <p className="error-text">{errors.textarea.message}</p>   :  <p className="error-ghost">No Error</p>}  

            <label htmlFor="question">What is {value1} + {value2}?*</label>
           <input  type="text"  {...register('question')}  className={`form-control ${errors.question ? 'is-invalid' : ''}`}/>
           {errors.question  ? <p className="error-text">{errors.question.message}</p>   : questionError  ? <p className="error-text">{questionError}</p>  : <p className="error-ghost">No Error</p>}


            <button className="btn-cta" type="submit">Send message</button>
        </form>
      </div>
      
</Wrapper>
);
};

export default Contact;


const Wrapper = styled.section`
grid-column:  full-start/full-end;
position: relative;
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
    font-size: 1.6rem;
    
  }

  input{
    padding: 1rem;
    border-radius: 0.5rem;
    width: 100%;
  
  }

  textarea{
    display: block;
    width: 100%;
    height:10rem;
    /* margin-bottom: 4rem; */
    resize: none;
    border-radius: 0.5rem;
    
  
  }

  button{
 
    width: 100%;
  
  }
  .error-text{
    font-size: 1.7rem;
    font-weight: bold;
    color:#ff1616;
    margin: 1rem 0 2rem 0;
  }

  .error-ghost{
    font-size: 1.7rem;
    margin: 1rem 0 2rem 0;
    opacity: 0;
  
  }
  .modal{
    background-color: rgba(0,0,0,0.8);
  }
  .icon-container{
    text-align: center;
  }
  .success-icon{
    font-size:8rem;
    color:var(--clr-success);
   
  }


  .section-title{
    margin: 1rem;
  }


  @media only screen and (max-width:48em) {
    .section-title{
      padding-bottom: 2rem;
    }
  }


    /* 480px -  320px  */
    @media only screen and (max-width:30em) {
      .form{
    min-height: 50rem;
    width: 25rem;   
   }

  }

  

`