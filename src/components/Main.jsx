import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

//components
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
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
    <View style={styles.contaitner}>
      <Text style={styles.title}>Rate Repository Application</Text>
      <View>
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;