import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useSignOut from '../hooks/useSignOut';
import { useResetters } from '../contexts/ResetStateProvider';

import theme from './theme';

const AppBar = () => {
  const { resetRepositoriesState } = useResetters();
  const signOut = useSignOut(resetRepositoriesState);
  const { authorizedUser, loading, error } = useAuthorizedUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" path='/' />
        {!loading && !error && getAppBarTabs(authorizedUser, signOut)}
      </ScrollView>
    </View>
  );
};

const getAppBarTabs = (user, signOut) => {
  return isAuthorized(user)
    ? 
    <>
      <AppBarTab name="Create review" path='/create-review' />
      <AppBarTab name="My reviews" path='/my-reviews' />
      <AppBarTab name="Sign out" path='/' onPress={signOut} /> 
    </>
    :
    <>
      <AppBarTab name="Sign in" path='/signin' />
      <AppBarTab name="Sign up" path='/signup' />
    </>;
};

const isAuthorized = authorizedUser =>  authorizedUser ? true : false;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 6,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: theme.colors.appBar,
  },
});

export default AppBar;