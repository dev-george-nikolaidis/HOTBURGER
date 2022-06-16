import { Link } from 'gatsby';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Links from './Links';



const Menu: React.FC = () => {
  const [hovered ,setHovered] = useState(false)
  const hamburgerContainerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  

  const onClickHandler = ()=>{
   

    if (hamburgerContainerRef.current != null) {
      hamburgerContainerRef.current.classList.toggle("transform");     
    }
    if (modalRef.current != null) {
      modalRef.current.classList.toggle("displayModal");     
    }
    
  }






  return (
    <MenuElement >
        <div className="hamburger-container" ref={hamburgerContainerRef} onClick={onClickHandler}>
              <div className="line-top lines"></div>  
              <div className="line-middle lines"></div>
              <div className="line-bottom lines"></div>
        </div>
        <div className="modal" ref = {modalRef}>
            <Links onClickHandler={onClickHandler} setHovered={setHovered} hovered={hovered}/>           
        </div>
    </MenuElement >
  );
};

export default Menu;


const MenuElement = styled.div`

  
  

  /* ******************       Hamburger         *********************** */
  .hamburger-container{
    position: fixed;
    top: 4.4rem;
    right: 2rem;
    z-index:8;
    padding:0.9rem;
    border-radius: 50%;
    cursor: pointer;
    transition: var(--transition);
  }

  .hamburger-container:hover{
      background: var(--clr-primary-1); 
     

    .line-top{
    
      margin-bottom:0.6rem;
   
      
    }
    
    .line-bottom{
      margin-top:0.6rem;
    }
    
    .lines{
      
    }
  }
  
  .transform{
    background: var(--clr-primary-1); 
    .line-top{
      transform : translateY(0.85rem) rotate(45deg);
      margin-bottom:0.6rem;
    }
    
    .line-middle{
      opacity:0 ;
    }
    .line-bottom{
      transform :translateY(-0.85rem) rotate(-45deg);
      margin-top:0.6rem;
    }

    .lines{
     
    }
  }

  .lines{
    width:2.4rem;
    height:0.25rem;
    background:#fff;
    
    
  }

  .line-top{
      margin-bottom:0.5rem;
    }
    .line-middle{
   
      
  }
    .line-bottom{
      margin-top:0.5rem;
      
  }

  .modal{
    position:fixed;
    top:0;
    left:0;
    right:0 ;
    bottom: 0;
 
    background: rgba(0,0,0,0.7);
    z-index:6;
    transition: var(--transition);
    transform: translateY(-100%);
  }



/****************     ANIMATIONS      ***************/

    .displayModal{
      transform: translateY(0%);

        .list-home{
            animation-duration: 1s;
           animation-name: slideInLeft;
      }

      .list-about{
           animation-duration: 1s;
           animation-name: slideRight;
      }

      .list-work{
           animation-duration: 1.2s;
           animation-name: slideInLeft;
      }

      .list-contact{
        animation-duration: 1.2s;
           animation-name: slideRight;
      }
    }

    @keyframes slideInLeft {
        from{           
          transform: translateX(90%);
      
        }

        to{
      
           transform: translateX(0%);
        }
    }

    @keyframes slideRight {
        from{ 
          transform: translateX(-90%);
        }
        to{
          transform: translateX(0%);
        }
    }
   
   
    
`

