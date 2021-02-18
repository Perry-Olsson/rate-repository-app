import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput 
        name='username' 
        placeholder='Username' 
      />
      <FormikTextInput 
        name='password' 
        placeholder='Password' 
        secureTextEntry
      />
      <FormikTextInput 
        name='passwordConfirmation'
        placeholder='Password confirmation'
        secureTextEntry
      />
      <TouchableHighlight style={styles.submitContainer} onPress={onSubmit} testID='submitButton' >
        <Text style={styles.submit}>Sign up</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
  },
  submitContainer: {
    backgroundColor: '#006cf0',
    borderRadius: 4,
  },
  submit: {
    padding: 10,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default SignUpForm;