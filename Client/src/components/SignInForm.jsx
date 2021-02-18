import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

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
      <TouchableHighlight style={styles.submitContainer} onPress={onSubmit} testID='submitButton' >
        <Text style={styles.submit}>Sign in</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default SignInForm;