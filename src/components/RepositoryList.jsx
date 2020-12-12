import React from 'react';
import { FlatList, Text } from 'react-native';

import ItemSeparator from './ItemSeparator';
import { TouchableRepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import SortRepositoriesSelector from './SortRepositoriesSelector';

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
        renderItem={({ item }) => <TouchableRepositoryItem repository={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => <SortRepositoriesSelector />}
      />
    );
};

export default RepositoryList;