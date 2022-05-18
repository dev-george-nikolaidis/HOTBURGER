import React,{createContext,Dispatch,ReactNode,useContext,useReducer} from 'react';
import { Action, CartType, CurrentItemClickedType } from '../Constants';
import { reducer } from './HotburgerReducer';


export interface HotburgerContextState {
    menuCategory: string;
    currentItemClicked:CurrentItemClickedType ;
    cart: CartType;
}

const initialState : HotburgerContextState = {
    menuCategory:"",
    currentItemClicked:{
        title:"",
        description:"",
        imageUrl:"",
        menuCategory:"",
        price:0
    } ,  
    cart:{
        products:[],
        amount: 0,
        totalPrice: 0,
    }
    
}



type ContextHook = () => { 
state:HotburgerContextState,
dispatch:(action:Action)=>void
}


const HotburgerContext = createContext<{
state:HotburgerContextState;
dispatch:Dispatch<Action>;
}>({
state:initialState,
dispatch:()=>{}
})


//Provider name must start with capital letter
export const HotburgerContextProvider = ({
children,
}:{
children: ReactNode;
}) => {
const [state, dispatch] = useReducer (reducer,initialState);






return(
<HotburgerContext.Provider value = {{ state, dispatch }}>
    {children}
</HotburgerContext.Provider>
)};



//Capitalize the first character after the word use
export const useHotburgerContext : ContextHook = () => {
const {state,dispatch} = useContext(HotburgerContext);
return {state, dispatch};
};