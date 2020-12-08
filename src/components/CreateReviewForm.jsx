import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

//components
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput 
        name='ownerName' 
        placeholder='Repository owner name' 
      />
      <FormikTextInput 
        name='repositoryName' 
        placeholder='Repository name' 
      />
      <FormikTextInput 
        name='rating'
        placeholder='Rating (0-100)'
      />
      <FormikTextInput
        name='text'
        placeholder='Review'
        multiline
      />
      <TouchableHighlight style={styles.submitContainer} onPress={onSubmit} testID='submitButton' >
        <Text style={styles.submit}>Create Review</Text>
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

export default CreateReviewForm;