import React from 'react';
import styled from 'styled-components';

const  ProgressBar :React.FC = () => {

  return (
<Wrapper>
    <div className="margin-area">
        <div className="dot one">1</div>
        <div className="dot two">2</div>
        <div className="dot three">3</div>
        <div className="dot four">4</div>
 
        <div className="progress-bar first"></div>
        <div className="progress-bar second"></div>
        <div className="progress-bar third"></div>
      
        <div className="message message-1"> Order Received </div>
        <div className="message message-2"> Preparation</div>
        <div className="message message-3">For Delivery</div>
        <div className="message message-4">Delivered</div>
    </div>
</Wrapper>
);
};

export default ProgressBar;


const Wrapper = styled.div`
    /* margin: 10rem 0; */
  
    .margin-area {
        position:relative;
        text-align: center;
        margin: 0 8rem;
  
    
    }

    .dot{
        height: 3rem;
        width:3rem;
        position:absolute;
        background-color:#000;
        border-radius: 50%;
        top: 1rem;
        color: #fff;
        line-height:3rem;
        z-index: 5;
        /* background: #0C84D9; */
     
    }
    .one{
        left:0%;
        background: #0C84D9;
    }

    .two{
        left:33%;
        background: #0C84D9;
    }

    .three{
        left:66%;
        background: #bbb;
     
    }
    .four{
        left:99%;
        background: #bbb;
         
    }


  .progress-bar{
    position: absolute;
    height: 10px;
    width:25%;
    top: 20px;
    background: #bbb;
  }
  .first {
    background: #0C84D9;
    width:33%;
    left:2%;
  }
  .second {
    left: 35%;
    width:33%;
  }
  .third {
    left: 68%;
    width:33%;
  }

  .message{
    position: absolute;
    height: 6px;
    width:15rem;
    /* padding: 10px; */
    margin:0;
    color: black;
    font-size:1.5rem;
    top: -1.2rem;
 
  }

  .message-1{
    left: -10%;
  }
  .message-2{
    left: 23%;
  }
  .message-3{
    left: 55%;
  }


  .message-4{
    right: -15%;
  }


     /* 1200px */
     @media only screen and (max-width:75em) {
      .message{
        width:13rem;
       }
    }
    /* 1024 - 769 */
     @media only screen and (max-width:64em) {
      .message{
        width:11rem;
       }
    }
   
      /* 768px -481 */
      @media only screen and (max-width:48em) {
     

       .one{
        left:-20%;
        background: #0C84D9;
    }

    .two{
        left:23%;
        background: #0C84D9;
    }

    .three{
        left:66%;
        background: #bbb;
     
    }
    .four{
        left:110%;
        background: #bbb;
         
    }

      .first {
        background: #0C84D9;
        width:45%;
        left:-18%;
      }
      .second {
        left: 28%;
        width:45%;
      }
      .third {
        left: 68%;
        width:45%;
      }

          .message{

    font-size:1.3rem;
    }
      .message-1{
    left: -25%;
  }
  .message-2{
    left: 15%;
  }
  .message-3{
    left: 60%;
  }


  .message-4{
    right: -25%;
  }
    }



       /* 600px -481 */
       @media only screen and (max-width:37.5em) {
     

     .one{
      left:-30%;
      background: #0C84D9;
  }

  .two{
      left:23%;
      background: #0C84D9;
  }

  .three{
      left:76%;
      background: #bbb;
   
  }
  .four{
      left:120%;
      background: #bbb;
       
  }

    .first {
      background: #0C84D9;
      width:55%;
      left:-28%;
    }
    .second {
      left: 25%;
      width:45%;
    }
    .third {
      left: 68%;
      width:60%;
    }

        .message{

  font-size:1.3rem;
  }
    .message-1{
  left: -40%;
}
.message-2{
  left: 10%;
}
.message-3{
  left: 60%;
}


.message-4{
  right: -45%;
}
  }

`