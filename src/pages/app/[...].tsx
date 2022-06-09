import React from 'react';
import { Router as MyRouter ,useNavigate,redirectTo ,} from "@reach/router"
import Cart from '../../components/Cart/Cart';
import Success from '../../components/Success';
import NotFoundPage from '../404';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import CheckoutSuccess from '../../components/CheckoutSuccess';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';





// Here can use my dynamic routes
const  App :React.FC = () => {

  return (
<>      

      <MyRouter basepath ="/app">
      
          <Cart    path="/cart" />
          <Login   path="/login" />
          <SignUp   path="/sign-up" />
          <Success   path="/success" />
 
          <CheckoutSuccess   path="/checkout-success/:session_id" /> 
        
          <NotFoundPage   path="*"  />
      </MyRouter>
    
</>

);
};

export default App;