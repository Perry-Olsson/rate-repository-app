import React from 'react';
import { StyleSheet } from 'react-native';

import Text from './Text';

const Loading = ({ loading, error }) => {
  if (error) return <Text style={styles.text}>Could not fetch repositories</Text>;
  return loading 
    ? <Text style={styles.text}>Loading...</Text> 
    : null;
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
  }
});

export default Loading;