import React, {Component} from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const TextTop = styled.h1`
    color: red;
`;

const TextBottom = styled.p`
    font-size: 13px;
`;

export default class LoginPage extends Component {
    render(){
       return(
          <div>
            <TextTop>Sign In!</TextTop>
            <TextBottom>
                Enter your Email and Password to loggin!
            </TextBottom>
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
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
        )}
        </Formik>
           </div>
        )
    }
}