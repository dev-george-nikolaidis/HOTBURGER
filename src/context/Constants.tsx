export enum ActionTypes { 
 TEST = 'TEST',
    SET_CURRENT_ITEM_CLICKED = 'SET_CURRENT_ITEM_CLICKED',
    RESET_CURRENT_ITEM_CLICKED = "RESET_CURRENT_ITEM_CLICKED"
 }

 export enum MenuProductCategory {
    MEAT_BURGER = "meat_burger",
    PLANT_BURGER = "plant_burger",
    CHICKEN = "chicken",
    DESSERT = "dessert",
    DRINKS = "drinks",
    FRIES = "fries",
    KIDS_MENU = "kids_menu",
    SALAD = "salad",
    VEGAN_FRIES = "vegan_frees",
    WINGS = "wings"


 }

export enum PayloadTypes{
    TestimonialsType
}

export type CartType  = {
        products:[],
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
        price:number,
}

   
   
  