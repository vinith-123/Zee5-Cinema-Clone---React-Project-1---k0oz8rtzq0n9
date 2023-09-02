import * as Yup from "yup"
import { object, string, number, date, InferType } from 'yup';

export const LoginSchema=Yup.object({
   
    email: string().email().required("please enter email"),
    password:string().min(6).required("please enter password"),
    
})