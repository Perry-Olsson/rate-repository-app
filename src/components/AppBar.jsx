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
  const signOut = useSignOut();
  const authorization = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" path='/' />
        {!authorization.loading && getAppBarTabs(authorization, signOut)}
      </ScrollView>
    </View>
  );
};

const getAppBarTabs = (authorization, signOut) => {
  return isSignedIn(authorization)
    ? 
    <>
      <AppBarTab name="Create Review" path='/create-review' />
      <AppBarTab name="Sign out" path='/' onPress={signOut} /> 
    </>
    :
    <>
      <AppBarTab name="Sign in" path='/signin' />
      <AppBarTab name="Sign up" path='/signup' />
    </>;
};

const isSignedIn = ({ data, error }) => {
  if (error) {
    console.log(error); 
    return false;
  }
  return data.authorizedUser ? true : false;
};

export default AppBar;