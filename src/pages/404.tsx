import { Link } from 'gatsby';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Logo from "../assets/images/Logo.png"
import styled from 'styled-components';
import SEO from '../components/layout/Seo';

interface Props {
  path: string;
}

const  NotFoundPage :React.FC<Props> = () => {
  const description = "Something when wrong.please navigate back to home page"
  return (  
<Wrapper >
      <div className="background"></div>
    <SEO title="Error 404"  description={description}/>
    <div className="modal-container">
            <img src={Logo} alt="logo image from hotburger" className="logo" />
            <h1>404</h1>
           <p className="sub-text"></p>
           <p className="error-text">Sorry, we couldn't find that page!</p>
           <Link to="/" type="submit" className='btn-cta'>Return to home page</Link>
        </div>
</Wrapper>
);
};

export default NotFoundPage;


const Wrapper = styled.div`
 
  .background{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:2;
    background-color: var(--clr-background-1);
  }

.modal-container{
    position: absolute;
    top: 40%;
    left: 50%;
    text-align:center;
      transform: translate(-50%, -50%);
    padding:4rem;
    background-color:var(--clr-background-menu);
    border-radius:5px;
    z-index:5;
  }

  .icon{
    font-size:8rem;
    color:var(--clr-error-1);
    
  }
  h1{
    font-size:16rem;
  }

  .error-text{
    font-size:6rem;
    margin:0 0 2rem 0 ;
  }

  .logo{
    max-width: 10rem;
    height:8rem;
  }

     /* 1200px - 1025px */
     @media only screen and (max-width:75em) {
      h1{
    font-size:12rem;
      }

      .error-text{
        font-size:4rem;
        margin:0 0 2rem 0 ;
      }
      .modal-container{
        top:50%;
        width:80%;

      }
    }

        /*768px - 481px */
    @media only screen and (max-width:48em) {
      h1{
    font-size:8rem;
      }

      .error-text{
        font-size:3rem;
        margin:0 0 2rem 0 ;
      }
      }


       /* 480px -  320px  */
  @media only screen and (max-width:30em) {
    h1{
    font-size:6rem;
      }

      .error-text{
        font-size:2rem;
        margin:0 0 2rem 0 ;
      }

      .btn-cta{
        padding:0.5rem 1rem;
        font-size: 1.4rem;
      }
}

`