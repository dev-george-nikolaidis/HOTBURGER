
import * as yup from 'yup';



export const Schema = yup.object().shape({
    name:yup.string().min(2 ,"Name must be at least 2 characters").required("Name is required"),
    email:yup.string().email("Please insert a valid email address").required("Email is required"),
    city:yup.string().min(2 ,"City must be at least 2 characters").required("City is required"),
    address:yup.string().min(2 ,"Please enter a valid address").required("Address is required"),
    postCode:yup.number().min(2,"Post code must be at least 4  digits").required("Post code is required"),
    phoneNumber:yup.string().min(2,"Please enter a valid phone number").required("Phone number is required")
})





// export const  customSchema =    (schema:any ,valueForValidation:any,filedName:any,stateErrors:any, setErrors:any ) =>{
  
//     const validationSchema =   schema
//     validationSchema.validate(valueForValidation,{
//      abortEarly:false
//     }).catch((err:any) =>{
//        console.log(err.message)
//        console.log("Errors?",stateErrors)
//      setErrors({
//          ...stateErrors,
//          [filedName]:  err.errors, 
        
//      })
     
//       return err.errors
//     })
   
//  }

 
export const checkForErrors = (err: any,setErrors: any,errors:any) => {
    
    let nameError:string
    let emailError: string;
    let cityError: string;
    let addressError: string;
    let postCodeError: string;
    let phoneNumberError :string;
   
    // console.log(err.errors)
    
   
    err.errors.find((el:any)=>{

      
      if (el.toLowerCase().includes("name")) {
        nameError = el
      }
      if (el.toLowerCase().includes("email")) {
        emailError = el
      }
  
      if (el.toLowerCase().includes("city")) {
        cityError = el
      }

      if (el.toLowerCase().includes("address")) {
        addressError = el
      }
      if (el.includes("Post code")) {
        postCodeError = el
      }
      if (el.toLowerCase().includes("phone number")) {
        phoneNumberError = el
      }

      // console.log(nameError)
      setErrors({
          ...errors,

          name:nameError,
          email:emailError,
          city:cityError,
          address:addressError,
          postCode:postCodeError,
          phoneNumber:phoneNumberError
          

      })
    })
}



//  export const customSchemaValidation = async(schemas:any,values:any)=>{
//      let errorsArray = []
//      try {
//         await Promise.all(
//             schemas.map(async(schema:any)=>{
//                 await schema.validate(values.map((value:any)=>{
//                     console.log(value)
//                     return value
//                 }))
//             })
//         )
       
//      } catch (err:any) {
//         errorsArray.push([{[values]:err.errors}])
//      }

//      console.log(errorsArray)
//      return errorsArray;
//  }




 

    
