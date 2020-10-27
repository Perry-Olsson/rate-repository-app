import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

//components
import AppBarTab from './AppBarTab';

//styles
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.appBar,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab name="Repositories" />
    </View>
  );
};

export default AppBar;