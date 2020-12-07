import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

import { openLink } from '../utils';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import theme from './theme';
import ItemSeparator from './ItemSeparator';


const RepositoryInfo = ({ repository }) => {
  const openGitHub = openLink(repository && repository.url);
  return (
    <>
      <View style={styles.container}>
        <RepositoryItem repository={repository} />
        <TouchableHighlight onPress={openGitHub} style={styles.touchable}>
          <Text style={styles.text}>Open in Github</Text>
        </TouchableHighlight>
      </View>
      <ItemSeparator />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryBackground,
  },
  touchable: {
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    margin: 10,
  },
  text: {
    color: '#ffffff',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  }
});

export default RepositoryInfo;