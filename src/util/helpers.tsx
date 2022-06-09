
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name:yup.string().min(2 ,"Name must be at least 2 characters").required("Name is required"),
  // email:yup.string().email("Please insert a valid email address").required("Email is required"),
  city:yup.string().min(2 ,"City must be at least 2 characters").required("City is required"),
  address:yup.string().min(2 ,"Please enter a valid address").required("Address is required"),
  postCode:yup.number().min(2,"Post code must be at least 4  digits").required("Post Code must be numbers"),
  phoneNumber:yup.number().min(2,"Please enter a valid phone number").required("Phone number is required"),
  textarea:yup.string()
})




