import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories, error } = useRepositories();

  return (
    <RepositoryListContainer repositories={repositories} error={error} />
  );
};

export const RepositoryListContainer = ({ repositories, error }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return error 
    ? <Text>Could not fetch repositories</Text>
    : (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
};

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default RepositoryList;