import React from 'react';
import styled from 'styled-components';
import { MdOutlineLocationOn,MdAccessTime,MdLocalPhone} from "react-icons/md";
const  Footer :React.FC = () => {

  return (
<Wrapper>
      <div className="information-container">

          <div className="address">
              <div className="icon-text-container">
                <MdOutlineLocationOn className="icon"/>
                <h5 className="title">Address</h5>
              </div>
              <p>97845 Baker st. 567   Los Angeles - US</p>
          </div>

          <div className="open-hours">
              <div className="icon-text-container">
                <MdAccessTime className="icon"/>
                <h5 className="title">Opening Hours</h5>
              </div>
              <p>Monday-Sunday:11:00 am - 10:00 pm</p>
          </div>

          <div className="newsletter">
              <div className="icon-text-container">
                <MdLocalPhone className="icon"/>
                <h5 className="title">Call Us </h5>
              </div>
              <p>(213) 320-4244</p>
          </div>
      </div>
      <hr  />
      <p className="footer-text"><span>HOT</span><span className="logo">BURGER </span>&copy;{new Date().getFullYear()} All rights reserved</p>
    
</Wrapper>
);
};

export default Footer;


const Wrapper = styled.footer`
    grid-column: 2/  14;
    /* min-height: 30rem; */
    margin-top: 10rem ;
  
    
  .information-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    
  }

    .icon-text-container{
      display: flex;
      align-items: center;
    }

    .icon{
        font-size:4rem;
        margin-right: 0.5rem;
        color:var(--clr-primary-1);
    }
    
    .title{
        font-size:2.5rem;

    }

    .information-container  p{
      font-size:1.8rem;
      margin: 2rem 0 5rem 0; 
    }


    hr{
      color:var(--clr-primary-1);
    }

    .footer-text{
      text-align:center;
      font-size:2rem;
      margin: 5rem;

    }

    .footer-text span{
      font-family: var(--ff-primary-3);
      
    }
    .logo{
      color:var(--clr-primary-1);
    }




      /* 1024px */
      @media only screen and (max-width:64em) {
          
    .icon{
        font-size:2.5rem;
    }

    .title{
        font-size:1.8rem;

    }

    .information-container  p{
      font-size:1.5rem;
   
    }
    }


      @media only screen and (max-width:48em) {
    
        .icon{
        font-size:2rem;
    }

    .title{
        font-size:1.5rem;

    }

    .information-container  p{
      font-size:1.3rem;
   
    }
    .footer-text{
      font-size: 1.6rem;
    }


     }

     @media only screen and (max-width:30em) {
      .information-container{
        grid-template-columns: 1fr;
        justify-items: start;

      }

      .footer-text{ 
      font-size:1.7rem;
        }

     
      }
`