import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  submit: {
    borderRadius: 4,
    margin: 10,
    padding: 10,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#006cf0'
  }
});

const initialValues = {
  username: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
  <>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry />
    <TouchableWithoutFeedback onPress={onSubmit}>
      <Text style={styles.submit}>Sign in</Text>
    </TouchableWithoutFeedback>
  </>
  );
};

const SignIn = () => { 
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} /> }
    </Formik>
  );
};

export default SignIn;