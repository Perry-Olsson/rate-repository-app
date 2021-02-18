import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import { useResetters } from '../contexts/ResetStateProvider';

const SignIn = () => { 
  const [signIn] = useSignIn();
  const { resetRepositoriesState } = useResetters();
  const history = useHistory();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      resetForm();
      resetRepositoriesState();
      history.push('/');
    } catch(e) {
      console.log(e);
    }
  };
  
  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      { ({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} /> } 
    </Formik>
  );
};

const initialValues = {
  username: '',
  password: '',
};
const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

export default SignIn;