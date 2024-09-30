// using useFormik hook->that will give access to formik states and methods

import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import './SimpleForm.css';


const schema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().required("Email is mandatory"),
  age: Yup.number()
    .required("age can not be empty")
    .min(18, "Age must be 18 or greater than 18"),
    password: Yup.string().min(4).required('Please enter password'),
    cpassword:Yup.string().oneOf([Yup.ref("password")]).required("Password does not matched"),
    

});

const SimpleForm = () => {
  
  
  
  const formik = useFormik({
    initialValues: { name: "", email: "", age: "" ,password:'', cpassword:''},
    validationSchema: schema,
    onSubmit:  onSubmitHandler,
  });
  
  
  const onSubmitHandler=(values)=>{
    console.log("submitted");
    console.log("errors: ",formik.errors)
    console.log("Form values: ", values);
  } ;





  return (
    <div>
      <h1> Simple form using Formik and Yup</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name} </div>) : null}

        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
        
        </div>
        <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (<div>{formik.errors.age}</div>) : null}
        
        </div>
        <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}

        </div>
        <div>
        <label htmlFor="cpassword">Confirm password</label>
        <input
          type="password"
          name="cpassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cpassword}
        />
        {formik.touched.cpassword && formik.errors.cpassword ? (<div>{formik.errors.cpassword}</div>) : null}

        </div>
        
        <button type="submit"  disabled={formik.isSubmitting}>Submit</button>
        
      </form>
    </div>
  );
};


export default SimpleForm;
/*


using <Formik></Formik>


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  age: Yup.number().required('Age is required').min(18, 'Must be 18 or older'),
});

const SimpleForm = () => {
  return (
    <div>
      <h1>Simple Form with Formik and Yup</h1>
      <Formik
        initialValues={{ name: '', email: '', age: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            alert('Form Submitted!');
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SimpleForm;
*/
