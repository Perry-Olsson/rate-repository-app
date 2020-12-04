import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

//components
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput 
        name='username' 
        placeholder='Username' 
        testID='usernameField'
      />
      <FormikTextInput 
        name='password' 
        placeholder='Password' 
        secureTextEntry
        testID='passwordField' />
      <TouchableWithoutFeedback onPress={onSubmit} testID='submitButton' >
        <Text style={styles.submit}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  submit: {
    borderRadius: 4,
    padding: 10,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#006cf0'
  }
});

export default SignInForm;