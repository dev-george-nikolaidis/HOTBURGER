import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';




const  Hero :React.FC = () => {


 
  return (
<Wrapper>
        <div className="modal"></div>
        <StaticImage src="../../assets/images/Hero.png" alt="Hero image of the HOTBURGER" className='hero-image'/>
        <div className="container">
          <h1>The best handmade burgers in  town made with love for you</h1>
          <Link to="/menu" className="btn-cta">our menu</Link>
        </div>
     
</Wrapper>
);
};

export default Hero;


const Wrapper = styled.section`
  grid-column: full-start / full-end;
  background-color:purple; 
  position: relative;

  .hero-image{
    max-width: 100%;
    min-height: 80rem;
    display: block;
  }

  .modal{
 
  }

  h1{
    font-size:4.8rem;
    font-weight: bold;
    font-family: var(--ff-primary-1);
    margin-bottom: 4rem;
    
  }

  .container{
 
    position: absolute;
    text-align: center;
    top: 40%;
    left: 50%;
    transform: translate( -50%, -50%);
    z-index: 2;
  }



  @media only screen and (max-width:64em) {
    h1{
    font-size:3rem;
  
  }

  .container{
    width: 100%;
    padding: 0 4rem;
  }
  
  }

  @media only screen and (max-width:48em) {
    h1{
    font-size:2.5rem;
  }
  .hero-image{
    min-height: 60rem;
  }
  
  }

 
`