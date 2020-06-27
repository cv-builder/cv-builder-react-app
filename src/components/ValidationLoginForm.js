import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';


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
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" visible={isSubmitting}>
            Submit
          </button>
        </Form>
        )}
        </Formik>
  );
export default ValidationLoginForm;