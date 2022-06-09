import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useParams ,useLocation } from "@reach/router"
import { useHotburgerContext } from '../context/hotburger/HotburgerContext';
import { navigate } from 'gatsby';
import { set } from 'react-hook-form';

interface Props {
    path: string;
  }
  



const  CheckoutSuccess :React.FC<Props> = ({}) => {
  const {state:{sessionId}} = useHotburgerContext()
  const [paid ,setPaid] = useState(false)
  const [error,setError] = useState(null)

  const param = useParams();
 
 
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
                const res = await fetch("http://localhost:1340/api/orders/confirm-order",request)
                const data = await res.json();
                setPaid(data.payment);

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
     console.log(user)
     displaySuccess = (
        <div>
           <h1>Payment success</h1>
           <p>{user.name}</p>
           <button type="submit" onClick={clickHandler}>Home</button>
        </div>
     )
   }
  
  // !at the end when we redirect the user back we will clear the  localStorage
  // window.localStorage.setItem("session_id","")

 
  return (
<Wrapper>
     {/* <div className="modal"></div> */}
    {displaySuccess}
    {error && error}
</Wrapper>
);
};

export default CheckoutSuccess;


const Wrapper = styled.div``