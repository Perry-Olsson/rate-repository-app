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
  const [{orderBy, orderDirection}, setSortOrder] = useState({ orderBy: "CREATED_AT", orderDirection: "DESC"});
  const { repositories, error } = useRepositories({orderBy, orderDirection, value});

  const onEndReach = () => {
    console.log('You have reached the end of the list');
  };

  return (
    <RepositoryListContainer 
      repositories={repositories}
      error={error} 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      setSortOrder={setSortOrder} 
      onEndReach={onEndReach}
    />
  );
};

export const RepositoryListContainer = ({ 
  repositories, 
  error, 
  searchQuery, 
  setSearchQuery, 
  setSortOrder, 
  onEndReach
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
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
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