import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import { AUTHORIZED_USER } from '../graphql/queries';
import useSignOut from '../hooks/useSignOut';

import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 6,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: theme.colors.appBar,
  },
});

const AppBar = () => {
  const query = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" path='/' />
        {!query.loading && 
        getSignInSignOutTab(query)}
      </ScrollView>
    </View>
  );
};

const getSignInSignOutTab = (query) => {
  const signOut = useSignOut();
  return isSignedIn(query) 
    ? <AppBarTab name="Sign out" path='/' onPress={signOut} /> 
    : <AppBarTab name="Sign in" path='/signin' />;
};


const isSignedIn = ({ data, error }) => {
  if (error) {
    console.log(error); 
    return false;
  }
  return data.authorizedUser ? true : false;
};

export default AppBar;