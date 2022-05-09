import React from 'react';
import { Router as MyRouter } from "@reach/router"



const  App :React.FC = () => {

  return (
<>  
  <h1>welcome to dynamic page</h1>
      <MyRouter basepath="/app">
          {/* <FetchTest  path= "/fetch-recipes" />
          <Login path="/login" />
          <RandomPerson path="/random-person" />
      */}
      </MyRouter>
    
</>

);
};

export default App;