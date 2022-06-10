import { Action, ActionTypes } from "../Constants";
import { HotburgerContextState } from "./HotburgerContext";

type ReducerType = (state : HotburgerContextState ,action:Action) => HotburgerContextState;




export const reducer : ReducerType = (state,action) => {
switch (action.type) {
  case  ActionTypes.TEST:
      return ({...state});
  case  ActionTypes.SET_CURRENT_ITEM_CLICKED:
    return (
      {
        ...state
        ,currentItemClicked:{
      title:action.payload.title,
      description:action.payload.description,
      imageUrl:action.payload.imageUrl,
      menuCategory:action.payload.menuCategory,
      price:action.payload.price
  
    },menuCategory:action.payload.menuCategory
  });
  case  ActionTypes.RESET_CURRENT_ITEM_CLICKED:
    return ({...state,currentItemClicked:{
      title:action.payload.title,
      description:action.payload.description,
      imageUrl:action.payload.imageUrl,
      menuCategory:action.payload.menuCategory,
      price:action.payload.price

    },menuCategory:action.payload.menuCategory
  });
  case  ActionTypes.ADD_ITEM_TO_CART:
    // console.log(action.payload.item)
    return ({...state,cart:{
        products: [ ...state.cart.products,action.payload.item]  ,
        amount : state.cart.amount + 1,
        totalPrice : state.cart.totalPrice + action.payload.price * action.payload.quantity
    }
  });
  case  ActionTypes.REMOVE_ITEM_FROM_CART:
    console.log(action.payload.id)
    return ({...state,cart:{
      products: state.cart.products.filter((product:any) => product.id != action.payload.id ) ,
        amount : state.cart.amount - 1 ,
        totalPrice : state.cart.totalPrice - action.payload.price * action.payload.quantity
    }
  });
  case  ActionTypes.STORE_SESSION:
    console.log(action.payload)
    return ({
      ...state,
      sessionId:action.payload
    }
  );
  case  ActionTypes.CHECKOUT_INDENT:
    console.log(action.payload)
    return ({
      ...state,
      checkout:action.payload
    }
  );
  // case  ActionTypes.CREATE_USER:
  //   console.log(action.payload)
  //   return ({
  //     ...state,
  //     user:{
  //       id:action.payload.session_id,
  //       name:action.payload.name,
  //       email:action.payload.email,
  //       city:action.payload.city,
  //       address:action.payload.address,
  //       postCode:action.payload.postCode,
  //       phoneNumber:action.payload.phoneNumber
  //     }
  //   }
  // );
default:
return state;
}
}