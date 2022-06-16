import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import "../../assets/css/main.css"
import Logo from "../../assets/images/logo.svg"
import { FaShoppingCart ,} from "react-icons/fa";
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from './Menu';


const  Navbar :React.FC = () => {

  const {state:{cart}} = useHotburgerContext();


  return (
<Wrapper>
    
        <ul className="flex-container">
          <li className="list-logo">  
            <Link to="/"> <img src={Logo} alt="logo of the HOTBURGER" className="logo" /> </Link>
           </li>
            <li>
               <Link to="/"activeStyle={active} >Home</Link>
            </li>
         
            <li>
                <Link to="/about" activeStyle={active}>About</Link>
             </li>
            <li>
                 <Link to="/contact" activeStyle={active}>Contact</Link>
             </li>
            {/* <li>
                 <Link to="/app/login" activeStyle={active}>Login</Link>
             </li>
            <li>
                 <Link to="/app/sign-up" activeStyle={active}>Sign up</Link>
             </li> */}
            <li>
              <Link to="/app/check-order" activeStyle={active}>Order Status</Link>
            </li>
            <li>
              <Link to="/menu" activeStyle={active}>Menu</Link>
            </li>

         

            <li className="list-cart">
              <Link to="/app/cart"  className="cart-container-link">  <FaShoppingCart className="cart-icon" />  <span className="cart-text">{cart.amount}</span> </Link>
            </li>
             
            <li className='list-burger'>
              {/* <GiHamburgerMenu className="burger-menu-icon"/> */}
              <Menu/>
            </li>
           
           
        </ul>
  
</Wrapper>
); 
};

export default Navbar; 

const active = {
  background: "#E7A74F",
  padding: "1rem"
}

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


  
  li:nth-child(2) {
     margin: 0 0 0 auto;
  }

  .list-cart{
    position: relative; 
    transition : var(--transition);
    /* background: red; */
  }


  .cart-container-link{
  
  }

  .cart-icon{
    font-size:3rem;
  }



  .cart-text{
    position: absolute;
    top: -20%;
    right: -20%;
    font-size:1.8rem;
    font-weight:bold;
    background-color: var(--clr-primary-1);
    padding: 0.6rem 1rem;
    border-radius:50%;
    
    
  }

 .active{
  background: var(--clr-primary-1);
  padding: 1rem;

 }
 

   li:last-of-type:hover{

    .cart-icon{
      color: var(--clr-primary-1);
    }
    .cart-text{
      color: var(--clr-primary-1);
      background-color:#fff;
    }
  }

   .list-burger{
    display: none;
   }
    .burger-menu-icon{
  
      font-size: 3.5rem;
 
    }

    /* 1024px */
    @media only screen and (max-width:64em) {

      .flex-container{
      
      
      }
     li{
      display: none;
     }
   
   ul .list-burger{
    display:inline-block;
    
    }
     .list-logo{
      display:inline-block;
     }

   ul  .list-cart{
      display: inline-block;
      margin: 0 0 0 auto;
     }
  }

    /* 480px -  320px  */
    @media only screen and (max-width:30em) {
     
        .logo{
          width: 15rem;
        }
        .burger-menu-icon{
        font-size: 2.5rem;
      }

      .cart-icon{
    font-size:2.5rem;
      }

  }

`