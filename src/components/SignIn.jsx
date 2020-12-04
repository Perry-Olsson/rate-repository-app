import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
//components
import SignInForm from './SignInForm';
//hooks
import useSignIn from '../hooks/useSignIn';
//utils


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
  const history = useHistory();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      resetForm();
      history.push('/');
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