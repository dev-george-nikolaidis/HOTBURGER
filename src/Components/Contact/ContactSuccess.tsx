import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'gatsby';


interface Props{
    message: string;
}

const  ContactSuccess :React.FC<Props> = ({message}) => {

  return (
<Wrapper>
        <div className="container">
            <FaCheckCircle className="icon"/>
            <h2>Success!</h2>
            <p>{message}</p>
             <Link to="/" className="btn-cta">Home</Link>
        </div>
</Wrapper>
);
};

export default ContactSuccess;


const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0,0,0,0.8);
    z-index: 4;
    
    /* min-height: 50rem; */
    /* width: 40rem; */

    .container{
     position: absolute;
    top: 50%;
    left: 50%;
    text-align:center;
     transform: translate(-50%, -50%);
    z-index:5;
  
    }
    .icon{
    font-size:8rem;
    color:var(--clr-success);
    }

    h2{ 
        margin:  2rem 0;
    }
    p{ 
        font-size:2.5rem;
    }

    a{
        margin-top:2rem;
    }
`