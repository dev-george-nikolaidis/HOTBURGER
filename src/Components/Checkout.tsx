import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// @ts-ignore
import CheckoutForm from "./CheckoutForm";


interface Props {
  path: string;
}


const key = process.env.PUBLIC_KEY


import "../assets/css/stripe.css";
import { dummyProducts } from "../context/Constants";

const stripePromise = loadStripe("pk_test_51KzfpVKPONnPEI7C6k4XNZPFaE1JTYtClgGWMoXp7hBzuEyCCNHZKCCr6yGe7acd8nR5dRBbnt425K4864eQRuhY00lnSZfzLr");

const  Checkout:React.FC<Props>  = () => {
    const [clientSecret, setClientSecret] = useState("");

    console.log(clientSecret)
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:1340/api/orders/create-stripe-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dummyProducts),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret))
      }, []);

      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
<Wrapper>
    <div className="App">
   
      {clientSecret && (
        //@ts-ignore
        <Elements options={options} stripe={stripePromise}>
          
          <CheckoutForm />
        </Elements>
      )}
    </div>
</Wrapper>
);
};

export default Checkout;


const Wrapper = styled.div``