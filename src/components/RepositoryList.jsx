import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';

import ItemSeparator from './ItemSeparator';
import { TouchableRepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import SortRepositoriesSelector from './SortRepositoriesSelector';

const RepositoryList = () => {
  const [sortOrder, setSortOrder] = useState({ orderBy: "CREATED_AT", orderDirection: "DESC"});
  const { repositories, error } = useRepositories(sortOrder);

  return (
    <RepositoryListContainer 
      repositories={repositories}
      setSortOrder={setSortOrder} 
      error={error} 
    />
  );
};

export const RepositoryListContainer = ({ repositories, setSortOrder, error }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    
  return error 
    ? <Text>Could not fetch repositories</Text>
    : (
      <>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item, index }) => renderWithSeperatorOnBottom({ item, index, repositoryNodes })}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={<SortRepositoriesSelector setSortOrder={setSortOrder} />}
        />
      </>
    );
};

const renderWithSeperatorOnBottom = ({ item, index, repositoryNodes }) => (
  index === repositoryNodes.length - 1 
    ? 
    <>
      <TouchableRepositoryItem repository={item} />
      <ItemSeparator height={20} />
    </>
    :
    <TouchableRepositoryItem repository={item} />
);

export default RepositoryList;