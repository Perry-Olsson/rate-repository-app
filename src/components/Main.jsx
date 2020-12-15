import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import RepositoryPage from './RepositoryPage';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import useRepositoriesState from '../hooks/useRepositoriesState';
import ResetStateProvider from '../contexts/ResetStateProvider';

const Main = () => {
  const repositoriesState = useRepositoriesState();
  const { resetRepositoriesState } = repositoriesState;

  return (
    <View style={styles.container}>
      <ResetStateProvider resetters={{ resetRepositoriesState }}>
        <AppBar />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/repository/:id">
            <RepositoryPage />
          </Route>
          <Route path='/create-review'>
            <CreateReview />
          </Route>
          <Route path="/" exact>
            <RepositoryList state={repositoriesState} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </ResetStateProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
  }
});

export default Main;