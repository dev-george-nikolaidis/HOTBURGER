export enum ActionTypes { 
 TEST = 'TEST',
    SET_CURRENT_ITEM_CLICKED = 'SET_CURRENT_ITEM_CLICKED',
    RESET_CURRENT_ITEM_CLICKED = "RESET_CURRENT_ITEM_CLICKED",
    ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",

 }

 export enum MenuProductCategory {
    MEAT_BURGER = "meat-burger",
    PLANT_BURGER = "plant-burger",
    CHICKEN = "chicken",
    DESSERT = "dessert",
    DRINKS = "drinks",
    FRIES = "fries",
    KIDS_MENU = "kids-menu",
    SALAD = "salad",
    VEGAN_FRIES = "vegan-frees",
    WINGS = "wings"


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

   
   
  