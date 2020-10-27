import React from 'react';
import { StyleSheet, View } from 'react-native';

//components
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

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

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;