import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';

import Text from './Text';

const Button = ({ onPress, text, color, style, textStyle }) => {
  const backgroundStyles = [
    styles.container, 
    color && { backgroundColor: getColor(color) },
    style
  ];
  const textStyles = [
    styles.text,
    color && { color: getTextColor(color)},
    textStyle
  ];
    
  return (
    <TouchableHighlight style={backgroundStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006cf0',
    borderRadius: 4,
  },
  text: {
    padding: 10,
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  }
});

const getColor = (color) => {
  switch(color) {
  case 'blue':
    return '#006cf0';
  case 'red': 
    return '#d63e3e';
  case 'light': 
    return '#dbdbdb';
  case 'dark': 
    return '#363636';
  }
};

const getTextColor = (color) => {
  switch(color) {
  case 'blue':
    return '#ffffff';
  case 'red': 
    return '#ffffff';
  case 'light': 
    return '#222222';
  case 'dark': 
    return '#ffffff';
  }
};

export default Button;