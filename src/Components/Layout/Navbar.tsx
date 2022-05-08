import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import "../../assets/css/main.css"
import Logo from "../../assets/images/logo.svg"



const  Navbar :React.FC = () => {

  return (
<Wrapper>
    
      
        <ul className="flex-container">
          <li>  
            <Link to="/">
                <img src={Logo} alt="logo of the HOTBURGER" className="logo" />
            </Link>
           </li>
            <li>
               <Link to="/"  >Home</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            {/* <Link to="/">Sign in</Link> */}
            <li>
              <Link to="/"  className='btn-shadow-link'>Order Online</Link>
            </li>
         
        </ul>
  
</Wrapper>
); 
};

export default Navbar; 


const Wrapper = styled.nav`
  grid-column:  2 / 14;
  height: 12rem;
  background-color: var(--clr-background-1);


  .flex-container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;  
  }

 
  ul li a{
    font-family: var(--ff-primary-1);
    font-weight: bold;
    color:#fff;
    font-size: 1.6rem;
  
  
  }

  

  li:not(:first-child){
    margin-left: 1.5rem;
    padding: 1rem;
  }

  li:not(:last-child):hover{
    background-color: var(--clr-primary-1);
  }

  li:nth-child(1):hover{
    background-color: var(--clr-background-1);
  }


  
  li:nth-child(2) {
     margin: 0 0 0 auto;
  }


  .btn-shadow-link{

    border: 2px #fff solid;
     padding: 0.8rem 1.5rem;
  
  }

  .btn-shadow-link:hover{
    border:2px var(--clr-primary-1) solid;
    
  }

 .active{
 }
 
`