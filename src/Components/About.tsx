import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import  * as styles from "./about.module.scss";



const  About :React.FC = () => {


  return (
<Wrapper id="about">
 
      <div className="modal"></div>
      <div className="text-container ">
        <h2 className="section-title">What we do</h2>
        <p><span>HOT</span><span>BURGER</span> offers burger lovers a better, more flavorful burger alternative usually only found in gourmet restaurants but at a fraction of the price. Go with traditional beef or choose from our vegan and vegetarian friendly burger menu. Our goal is to bring gourmet "fast-food" dining to you . We have a wide range of menu items, many of which are prepared in a way that tastes the way they should taste, all created from scratch with only the freshest ingredients.</p>
      </div>
      <StaticImage src="../assets/images/about.png" alt="" className='about-image'/>
      {/* <div className={styles.test}>kdsakodpas</div>
      <div className={styles.test2}>kdsakodpas</div>
      <div className={styles.test3}>kdsakodpas</div> */}
</Wrapper>

);
};

export default About;


const Wrapper = styled.section`
  grid-column: full-start / full-end;
  margin: 2rem 0 10rem 0;
  position: relative;


  .about-image{
    max-width: 100%;
    min-height: 70rem;
    display: block;
  }
  .section-title{
    margin: 4rem 0;
  }

  .text-container{
    position: absolute;
    text-align: center;
    top: 40%;
    left: 50%;
    transform: translate( -50%, -50%);
    z-index:3;
    
  }


  p{
    font-size:2.5rem;
    font-weight: 500;
    letter-spacing:0.4rem;
    font-family: var(--ff-paragraph-1);
  }

  span{
    font-family: var( --ff-primary-3);
  }

  span:nth-of-type(2){
    color: var( --clr-primary-1)
  }



  @media only screen and (max-width:75em) {
    .text-container{
      width: 100%;
      padding:  0 4rem;
    }
  }

  @media only screen and (max-width:48em) {
    p{
      font-size:2rem;
    }
  }

    /* 480px -  320px  */
    @media only screen and (max-width:30em) {
      .text-container{
      width: 100%;
      padding:  0 2rem;
    }
      p{
      font-size:1.7rem;
    }
  }
`