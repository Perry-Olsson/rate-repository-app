import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//styles
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  count: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  }
});

const RepositoryStat = ({ text, count }) => {
  let formattedCount = count.toString();
  if (count >= 1000) {
    formattedCount = formattedCount.substr(0 , formattedCount.length - 2);
    if (formattedCount[formattedCount.length - 1] === '0')
      formattedCount = formattedCount.substr(0, formattedCount.length - 1) + 'k'; 
    else 
      formattedCount = formattedCount.substr(0, formattedCount.length - 1) + '.' + formattedCount.substr(formattedCount.length - 1) + 'k';
  }
  return (
    <View style={styles.container}>
      <Text style={styles.count}>
        {formattedCount}
      </Text>
      <Text>
        {text}
      </Text>
    </View>
  );
};

export default RepositoryStat;