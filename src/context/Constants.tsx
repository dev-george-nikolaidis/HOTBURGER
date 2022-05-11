export enum ActionTypes { 
 TEST = 'TEST',

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

export interface Action {
type:ActionTypes;
payload?: any;
}



   
   
  