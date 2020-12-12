import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useDebounce } from 'use-debounce';

import ItemSeparator from './ItemSeparator';
import { TouchableRepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import RepositoryListHeader from './RepositoryListHeader';

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 500);
  const [sortOrder, setSortOrder] = useState({ orderBy: "CREATED_AT", orderDirection: "DESC"});
  const { repositories, error } = useRepositories(sortOrder, value);
  console.log(searchQuery);

  return (
    <RepositoryListContainer 
      repositories={repositories}
      error={error} 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      setSortOrder={setSortOrder} 
    />
  );
};

export const RepositoryListContainer = ({ 
  repositories, 
  error, 
  searchQuery, 
  setSearchQuery, 
  setSortOrder 
}) => {
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
          ListHeaderComponent={
            <RepositoryListHeader 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setSortOrder={setSortOrder} 
            />
          }
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