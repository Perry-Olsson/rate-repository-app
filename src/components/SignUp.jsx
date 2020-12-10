import React from 'react';
import { Formik } from 'formik';

import SignUpForm from './SignUpForm';

const SignUp = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

export default SignUp;