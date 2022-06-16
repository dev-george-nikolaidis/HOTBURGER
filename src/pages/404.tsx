import { Link } from 'gatsby';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import styled from 'styled-components';
import SEO from '../components/layout/Seo';

interface Props {
  path: string;
}

const  NotFoundPage :React.FC<Props> = () => {
  const description = "Something when wrong.please navigate back to home page"
  return (  
<Wrapper>
    <SEO title="Error 404"  description={description}/>
    <div className="modal-container">
        
            {/* <AiFillCloseCircle className="icon"/> */}
            <h1>404</h1>
           <p className="sub-text"></p>
          

           <p className="error-text">Sorry, we couldn't find that page!</p>
          
           <Link to="/" type="submit" className='btn-cta'>Return to home page</Link>
        </div>
</Wrapper>
);
};

export default NotFoundPage;


const Wrapper = styled.section`

.modal-container{
    position: absolute;
    top: 40%;
    left: 50%;
    text-align:center;
   transform: translate(-50%, -50%);
    /* border: 1px solid #000; */
  
    /* background:red; */
  }

  .icon{
    font-size:8rem;
    color:var(--clr-error-1);
    
  }
  h1{
    font-size:16rem;
  }

  .error-text{
    font-size:6rem;
    margin:0 0 2rem 0 ;
  }

`