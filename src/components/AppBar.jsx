import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

//components
import AppBarTab from './AppBarTab';

//styles
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: theme.colors.appBar,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" path='/' />
        <AppBarTab name="Sign in" path='/signin' />
      </ScrollView>
    </View>
  );
};

export default AppBar;