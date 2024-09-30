import React, { useState } from "react";
import { Formik } from "formik";

const initialValues={
    email:'',
    password:''
}

const validate=(values)=>{
    let errors={};
    if(!values.email){
        errors.email="please enter Email";
    }else if(!values.email.includes('@')){
        errors.email="InvalidS Email";
    }

    if(!values.password){
        errors.password='Please enter password';
    }else if(values.password.length<4){
        errors.password="Password too short"
    }

return errors;      //return the error object

}


const submitForm=(values)=>{
    console.log(values);
}
const Form= ()=>{

//    const initialValues={email:'',password:''};
//    const[formValues,setFormValues]=useState(initialValues);
//    const[formErrors,setFormErrors]=useState({});
//    const[isSubmitting,setIsSubmitting]=useState(false);
    return(

    <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={submitForm}>

   
    </Formik>
    )
}
export default Form;