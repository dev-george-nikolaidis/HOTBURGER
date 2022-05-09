import { Action, ActionTypes } from "../Constants";
import { HotburgerContextState } from "./HotburgerContext";

type ReducerType = (state : HotburgerContextState ,action:Action) => HotburgerContextState;




export const reducer : ReducerType = (state,action) => {
switch (action.type) {
  case  ActionTypes.TEST:
      return ({...state});
  // case  ActionTypes.FETCH_TESTIMONIALS:
  //   return ({...state,testimonials:action.payload});
default:
return state;
}
}