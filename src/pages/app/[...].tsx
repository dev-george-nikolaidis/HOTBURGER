import React from 'react';
import { Router as MyRouter } from "@reach/router"
import Cart from '../../components/Cart/Cart';

import Success from '../../components/Success';
import NotFoundPage from '../404';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import Checkout  from '../../components/Checkout';
import CheckoutSuccess from '../../components/CheckoutSuccess';



// Here can use my dynamic routes
const  App :React.FC = () => {

  return (
<>      

      <MyRouter basepath ="/app">
          <Cart    path="/cart" />
          <Login   path="/login" />
          <SignUp   path="/sign-up" />
          <Success   path="/success" />
          <Checkout   path="/checkout" />
          <CheckoutSuccess   path="/checkout-success" />
          <NotFoundPage   path="*"  />
      </MyRouter>
    
</>

);
};

export default App;