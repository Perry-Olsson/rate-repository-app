import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignUpForm from './SignUpForm';

const SignUp = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(1).max(30),
  password: yup.string().required('Password is required').min(5).max(50),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Must confirm your password')
});

export default SignUp;