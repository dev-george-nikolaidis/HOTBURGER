import React from 'react';
import { Router as MyRouter } from "@reach/router"
import Cart from '../../components/Cart';
import Test from '../../components/Test';


// Here can use my dynamic routes
const  App :React.FC = () => {

  return (
<>      

      <MyRouter basepath ="/app">
          <Cart   path="/cart" />
          {/* <Test   path="/test" /> */}
      </MyRouter>
    
</>

);
};

export default App;