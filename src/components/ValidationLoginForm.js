import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
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
          <Input type="email" name="email" placeholder="Email"/>
          <ErrorMessage name="email" component="div" />
          <Input type="password" name="password" placeholder="Password"/>
          <ErrorMessage name="password" component="div" />
          <TermsCheckBoxLogin/>
          <ButtonSubmitAppearance/>
        </Form>
        )}
        </Formik>
  );
export default ValidationLoginForm;