import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';



const  Hero :React.FC = () => {

  return (
<Wrapper>
        <div className="modal"></div>
        <StaticImage src="../../assets/images/Hero.png" alt="Hero image of the HOTBURGER" class='hero-image'/>
        <div className="container">
          <h1>The best handmade burgers in  town made with love for you</h1>
          <Link to="/menu" className="btn-cta">Order now</Link>
        </div>
     
</Wrapper>
);
};

export default Hero;


const Wrapper = styled.div`
  grid-column: full-start / full-end;
  background-color:purple; 
  position: relative;

  .hero-image{
    max-width: 100%;
    min-height: 80rem;
   display: block;
  }

  .modal{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: var(--clr-modal-1);
  }

  h1{
    font-size:4.8rem;
    font-weight: bold;
    font-family: var(--ff-primary-3);
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

`