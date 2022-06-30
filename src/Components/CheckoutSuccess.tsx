import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useParams ,useLocation } from "@reach/router"
import { useHotburgerContext } from '../context/hotburger/HotburgerContext';
import { navigate } from 'gatsby';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaCheckCircle , FaCopy} from "react-icons/fa";
import SEO from './layout/Seo';

interface Props {
    path: string;
  }
  



const  CheckoutSuccess :React.FC<Props> = ({}) => {
  const {state:{sessionId}} = useHotburgerContext()
  const [paid ,setPaid] = useState(false)
  const [error,setError] = useState(null)
  const [total ,setTotal] = useState(0)
  const param = useParams();
 const  [clipboardCopied ,setClipboardCopied] = useState(false)
 
  const indexOfEqual = param.session_id.indexOf("=")
  const sessionID = param.session_id.slice(indexOfEqual +1)
  const windowSession = window.localStorage.getItem("session_id")

  if (windowSession != sessionID) {
    navigate("/")
  }

  
  useEffect(()=>{

    const confirmPayment = async () => {
      
    
            const request = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              
              body: JSON.stringify({id:sessionID})
            }
              try {
                const res = await fetch("https://hotburger-app.herokuapp.com/api/orders/confirm-order",request)
                const data = await res.json();
                // console.log(data)
                setPaid(data.payment);
                setTotal(data.total)
        } catch (err:any) {
          setError(err.message)
        }
    }

    if (windowSession === sessionID) {
      confirmPayment();
    }

  },[sessionID])


  const clickHandler = ()=>{

    window.localStorage.setItem("session_id","")
    window.localStorage.setItem("user","")
    navigate("/")
  }

   let displaySuccess ;

   if (paid) {
     let user :any = window.localStorage.getItem('user');
     user =  JSON.parse(user);
    //  console.log(user)
     displaySuccess = (
        <div className="modal-container">
        
            <FaCheckCircle className="icon"/>
             <h2>Success!</h2>
           <p className="sub-text">{user.name} your request has been successfully processed</p>
           <CopyToClipboard text={user.orderId} onCopy = {()=>setClipboardCopied(true)} >

           <p className="order-text">To check your order status go to home page then click Order Status and provide your order id : <span>{user.orderId} <FaCopy className='copy-icon'/></span> </p>
           </CopyToClipboard>
           <button type="submit" className='btn-cta' onClick={clickHandler}>Return to home page</button>
        </div>
     )
   }
  


 
  return (
<Wrapper>
  <SEO title="Checkout Success" description="You successfully purchase the products."/>
     {/* <div className="modal"></div> */}
    {displaySuccess}
    {error && error}
</Wrapper>
);
};

export default CheckoutSuccess;


const Wrapper = styled.section`
  background-color: var(--clr-background-menu);
  height:100vh;
  position: relative;

  .modal-container{
    position: absolute;
    top: 40%;
    left: 50%;
    text-align:center;
    transform: translate(-50%, -50%);
    /* border: 1px solid #000; */
  
    /* background:red; */
  }
  
   .title-container{
    
   }

  .icon{
    font-size:8rem;
    color:var(--clr-success);
    
  }

  .sub-text{
    font-size:1.6rem;
  }
  .order-text{
    font-size:1.6rem;
    margin: 2rem 0;
  }

  span{
    font-weight: bold;
  }

  .copy-icon{
    transition: var(--transition);
    &:hover{
      color:var(--clr-success);
    }
  }


  /* 480px -  320px  */
@media only screen and (max-width:30em) {
  .modal-container{
    width: 100%;
  }
}
`