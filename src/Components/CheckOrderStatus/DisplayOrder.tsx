import React from 'react';
import styled from 'styled-components';
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import DisplayOrderProducts from './DisplayOrderProducts';
import ProgressBar from './ProgressBar';

const  DisplayOrder :React.FC = () => {
    const {state:{order}} = useHotburgerContext()
     let displayOrder;

    if (order) {
        const {name,address,city,amount,orderStatus,phone_number,post_code,products,special_instructions} = order;
        console.log(post_code)
    displayOrder = (
        <div className="container">
            <div className="form">
               <ProgressBar/>
                 <h2>Delivery information</h2>
                <label htmlFor="Name">Name</label>
                <input type="text"  value={name}  readOnly={true}/>
                <label htmlFor="Address">Delivery Address</label>
                <input type="text"  value={address}  readOnly={true}/>        
                <label htmlFor="city">City</label>
                <input type="text"  value={city}  readOnly={true}/>        
                <label htmlFor="post code">Post Code</label>
                <input type="text"  value={post_code}  readOnly={true}/>        
                <label htmlFor="city">Telephone Number</label>
                <input type="text"  value={phone_number}  readOnly={true}/> 
                <h3>Special Delivery Instructions</h3> 
                <textarea value={special_instructions? special_instructions :""} readOnly={true}></textarea>      
                {/* <DisplayOrderProducts/> */}
            
            </div>

        </div>
    )
}

    console.log(order)

    
  return (
<Wrapper>
    {displayOrder}
</Wrapper>
);
};

export default DisplayOrder;


const Wrapper = styled.section`
   position: relative;

    .form{
    padding: 4rem;
   
    }
    
  h2{
    margin: 8rem 0 2rem 0;
    font-size: 2.5rem;
  }

  label{
    font-size: 1.6rem;
    display: inline-block;
    margin-bottom: 0.5rem;

  }

  input{
    width: 100%;
    height: 4rem;
    margin: 0.3rem 0;
    margin-bottom: 2rem;
    /* border-radius:5px; */

  }
  textarea{
    width: 100%;
    height:10rem;
    resize: none;

    margin: 1rem 0 5rem 0;
  }

  h3{
    font-size: 2.5rem;
    margin: 3rem 0 1rem 0;
  }

 
`