import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, StyleSheet, ScrollView, Keyboard } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const CreateReviewForm = ({ onSubmit }) => {
  const [viewHeight, setViewHeight] = useState(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  console.log(viewHeight);
  const onLayout = (e) => { setViewHeight(e.nativeEvent.layout.height); };
  const onKeyboardDidShow = (e) => { setKeyboardHeight(e.endCoordinates.height); };
  const onKeyboardDidHide = () => { setKeyboardHeight(0); };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardWillHide', onKeyboardDidHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
      Keyboard.removeListener('keyboardWillHide', onKeyboardDidHide);
    };
  }, []);

  return (
    <View onLayout={onLayout} style={{ flex: 1 }}>
      <View style={{ height: viewHeight ? viewHeight - keyboardHeight : '100%'}}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled' >
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
          <TouchableHighlight style={styles.submitContainer} onPress={onSubmit} testID='submitButton'>
            <Text style={styles.submit}>Create Review</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
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