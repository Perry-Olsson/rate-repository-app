import React from 'react';
import { FlatList } from 'react-native';

import ItemSeparator from './ItemSeparator';
import { TouchableRepositoryItem } from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
import Loading from './Loading';

const RepositoryList = ({ state }) => {
  const { 
    searchQuery, 
    setSearchQuery,  
    sortOrder,
    setSortOrder, 
    repositories, 
    loading, 
    error, 
    fetchMore 
  } = state;

  const onEndReach = () => { fetchMore(); };

  return (
    <>
      <RepositoryListContainer 
        loading={loading}
        error={error}
        repositories={repositories} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder} 
        onEndReach={onEndReach}
      />
    </>
  );
};

export const RepositoryListContainer = ({ 
  loading,
  error,
  repositories, 
  searchQuery, 
  setSearchQuery, 
  sortOrder,
  setSortOrder, 
  onEndReach
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    
  return (
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
            sortOrder={sortOrder}
            setSortOrder={setSortOrder} 
          />
        }
        ListFooterComponent={ <Loading loading={loading} error={error} />}
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