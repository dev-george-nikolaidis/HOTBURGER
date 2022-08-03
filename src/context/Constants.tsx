export enum ActionTypes { 
 TEST = 'TEST',
    SET_CURRENT_ITEM_CLICKED = 'SET_CURRENT_ITEM_CLICKED',
    RESET_CURRENT_ITEM_CLICKED = "RESET_CURRENT_ITEM_CLICKED",
    ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
    REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
    TOGGLE_IS_CART_EMPTY = "TOGGLE_IS_CART_EMPTY",
    STORE_SESSION = "STORE_SESSION",
    CREATE_USER="CREATE_USER",
    CHECKOUT_INDENT = "CHECKOUT_INDENT",
    FETCH_ORDER = "FETCH_ORDER",
    SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY",

 }

 export enum MenuProductCategory {
   BEEF_BURGER = "BEEF-BURGER",
   CHICKEN_BURGER = "CHICKEN-BURGER",
   TURKEY_BURGER = "TURKEY-BURGER",
   BEAN_BURGER = "BEAN-BURGER",
   SALAD = "SALAD",
   KID_MENU = "KID-MENU",
   BEVERAGES = "BEVERAGES",
   FRIES = "FRIES",
   DESSERT = "DESSERT"


 }



export enum PayloadTypes{
    TestimonialsType
}

type MeatBurgerType = [
        
         {
                title:string,
                image:string,
                message:string,
                price:number,
                temperature:string,
                quantity:number

         }

   ]

type VeganBurgersType = [
        {}
]

export type CartType  = {
        products:any ,
        amount: number,
        totalPrice: number,
}


export interface Action {
type:ActionTypes;
payload?: any;
}


export type CurrentItemClickedType ={
        title:string,
        imageUrl:string,
        description:string,
        menuCategory:string,
        price:number
     
}

export type OrderType = {
   name:string,
   city:string,
   address:string,
   post_code:string,
   amount:number,
   phone_number:string,
   special_instructions:string | null,
   orderStatus:string,
   products:any
}

export type UserType ={
   id:string,
   name:string,
   email:string,
   city:string,
   address:string,
   postCode:number,
   phoneNumber:string
}
   

