import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
//components
import SignInForm from './SignInForm';
//hooks
import useSignIn from '../hooks/useSignIn';
//utils
import AuthStorage from '../utils/AuthStorage';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const SignIn = () => { 
  const [signIn] = useSignIn();

  const onSubmit = async values => {
    const { username, password } = values;
    const authorization = new AuthStorage();

    try {
      const { data } = await signIn({ username, password});
      await authorization.setAccessToken(data.authorize.accessToken);
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} /> } 
    </Formik>
  );
};

export default SignIn;