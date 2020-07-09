import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
<<<<<<< HEAD
import ButtonSubmitAppearance from "components/ButtonSubmitAppearance.js";
=======
import styled from 'styled-components';
import ButtonSubmitAppearance from "components/ButtonSubmitAppearance.js";
import TermsCheckBoxLogin from "components/TermsCheckBoxLogin.js";


const Input = styled.input`
    background-color: #D7CFCF;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 15px;
    width: 285px;
    :focus {
      box-shadow: 0 0 10px blue;
    }
`;
>>>>>>> 0e95e5a... Add next step login form style, and one component

const ValidationLoginForm = () => (
    <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
          const errors = {};
          if (!values.email) {
          errors.email = 'Email is Required';
          } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
          errors.email = 'Invalid email address';
          }
        return errors;
          }}
        onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("You are loggin!");
        }, 400);
        }}
        >
        {({ isSubmitting }) => (
        <Form>
<<<<<<< HEAD
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
=======
          <Input type="email" name="email" placeholder="Email"/>
          <ErrorMessage name="email" component="div" />
          <Input type="password" name="password" placeholder="Password"/>
          <ErrorMessage name="password" component="div" />
          <TermsCheckBoxLogin/>
>>>>>>> 0e95e5a... Add next step login form style, and one component
          <ButtonSubmitAppearance/>
        </Form>
        )}
        </Formik>
<<<<<<< HEAD
=======
        
>>>>>>> 0e95e5a... Add next step login form style, and one component
  );
export default ValidationLoginForm;