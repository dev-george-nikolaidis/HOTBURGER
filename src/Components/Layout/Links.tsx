import React from 'react';
import { Link } from 'gatsby';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';

interface Props{
    onClickHandler:()=>void
    setHovered:React.Dispatch<React.SetStateAction<boolean>>
    hovered:boolean
}

const  Links :React.FC<Props> = (props) => {

    const {onClickHandler,setHovered,hovered} = props;

  return (
<LinksElement >
        <ul className="list-container">
              <li>
                 <Link className="link" to="/" onClick={onClickHandler} onMouseOver={()=>setHovered(true)} onMouseOut={()=>setHovered(false)}    activeClassName="active">
                    <span > Home</span> <BsArrowRight className="arrow-icon"/>
                  </Link>
              </li>
              <li>             
                   <Link  className="link" to="/about" onClick={onClickHandler}  activeClassName="active">
                  <span > About</span> <BsArrowRight className="arrow-icon"/> 
                  </Link> 
              </li>
              <li >
                 <Link className="link" to="/contact" onClick={onClickHandler}   activeClassName="active">
                  <span > Contact</span> <BsArrowRight className="arrow-icon" />
                  </Link> 
                </li>
              <li >
                  <Link  className="link"to="/app/check-order" onClick={onClickHandler}  activeClassName="active">
                  <span > Order Status</span> <BsArrowRight className="arrow-icon"/>
                  </Link> 
              </li>     
              <li >
                  <Link  className="link"to="/menu" onClick={onClickHandler}  activeClassName="active">
                  <span > Menu</span> <BsArrowRight className="arrow-icon"/>
                  </Link> 
              </li>     
            </ul>
</LinksElement >
);
};

export default Links;


const LinksElement = styled.div`

.list-container{
  position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  
  }




  li {
        text-decoration:none;
        display: block;  
        transition: var(--transition);
        margin-top: 2rem;
        list-style: none;
   
      
        
    }


    li:hover{
   
        transform: translateY(0.5rem) ;  
     

        .arrow-icon{
            transform: rotate(180deg) ; 
        }
    }

    .link{
        display:flex;
        align-items: center;
        justify-content: center;
        text-decoration:none; 
      
        width: 20rem;
        color:#000;
        background-color: var(--clr-primary-1);
        padding: 0.8rem 1.2rem;
        border-radius: 2px;
        
      &:hover{
        background-color: var(--clr-primary-1-hover);
      }
    }

    
    span{
    
      
      font-family:var(--ff-secondary);
    }



    .link:hover{
      
    }

    .list-home{
    
    }

    .arrow-icon{
      font-size:2rem;
      margin-left: 0.5rem;
      transition: var(--transition);
    
    }

   
    .active{
      display: none;
      
    }
  

`