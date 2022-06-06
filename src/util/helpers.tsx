
import * as yup from 'yup';



export const Schema = yup.object().shape({
    name:yup.string().min(2 ,"Name must be at least 2 characters").required("Name is required"),
    email:yup.string().email("Please insert a valid email address").required("Email is required")
})

export const  customSchema =   (schema:any ,valueForValidation:any,filedName:any,stateErrors:any, setErrors:any ) =>{
  
    const validationSchema =   schema
    validationSchema.validate(valueForValidation,{
     abortEarly:false
    }).catch((err:any) =>{
       // console.log(err.message)
    //    console.log("Errors?",stateErrors)
    //  setErrors({
    //      ...stateErrors,
    //      [filedName]:  err.errors, 
        
    //  })
     
      return err.errors
    })
   
 }

 export const schemas = [
     yup.string().min(2 ,"Name must be at least 2 characters").required
 ]

 export const customSchemaValidation = async(schemas:any,values:any)=>{
     try {
        await Promise.all()
         await schemas.validate()
     } catch (error:any) {
        console.log(error.errors)
     }
 }




 

    
