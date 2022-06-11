import React from 'react';
import { Router as MyRouter, useNavigate, redirectTo, } from "@reach/router"
import Cart from '../../components/Cart/Cart';

import NotFoundPage from '../404';
import Login from '../../components/auth/Login';
import SignUp from '../../components/auth/SignUp';
import CheckoutSuccess from '../../components/CheckoutSuccess';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import OrderStatus from '../../components/CheckOrderStatus/OrderStatus';





// Here can use my dynamic routes
const App: React.FC = () => {

  return (
    <>

      <MyRouter basepath="/app">
        <Cart path="/cart" />
        {/* <Login path="/login" /> */}
        {/* <SignUp path="/sign-up" /> */}
        <OrderStatus path="/check-order" />
        <CheckoutSuccess path="/checkout-success/:session_id" />
        <NotFoundPage path="*" />
      </MyRouter>

    </>

  );
};

export default App;