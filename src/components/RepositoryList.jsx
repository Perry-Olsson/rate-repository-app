import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

//components
import RepositoryItem from './RepositoryItem';

//hooks
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, error } = useRepositories();

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

export default RepositoryList;