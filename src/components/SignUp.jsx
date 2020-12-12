import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import SignUpForm from './SignUpForm';
import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';

const SignUp = () => {
  const [createUser, createUserResult] = useCreateUser();
  const [signIn, signInResult] = useSignIn();
  const history = useHistory();

  const onSubmit = async ({ username, password }, { resetForm }) => {
    try {
      await createUser({ username, password });
      await signIn({ username, password });
      resetForm();
      history.push('/');
    } catch(e) {
      if (createUserResult.error)
        console.error(createUserResult.error);
      else if (signInResult.error)
        console.error(signInResult.error);
      else
        console.error(e);
    }
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