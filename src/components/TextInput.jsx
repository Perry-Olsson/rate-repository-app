import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 10,
    borderColor: '#999999',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 4,
  }
});

const TextInput = ({ style,...props }) => {
  const textInputStyle = [styles.input, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;