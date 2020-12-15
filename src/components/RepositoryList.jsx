import React, { useRef, useEffect } from 'react';
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
    scrollPosition,
    setScrollPosition,
    scrollIndex,
    setScrollIndex,
    repositories, 
    loading, 
    error, 
    fetchMore 
  } = state;

  const onScroll = (event) => { setScrollPosition(event.nativeEvent.contentOffset.y);};
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
        scrollPosition={scrollPosition}
        scrollIndex={scrollIndex}
        setScrollIndex={setScrollIndex}
        onScroll={onScroll}
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
  scrollPosition,
  scrollIndex,
  setScrollIndex,
  onScroll,
  onEndReach
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  const scrollRef = useRef();
  const scrollPositionRef = useRef(scrollPosition);
  scrollPositionRef.current = scrollPosition;

  useEffect(() => {
    // scrollRef.current.scrollToOffset({
    //   offset: scrollPosition,
    //   animated: false,
    // });
    return () => { setScrollIndex(Math.ceil((scrollPositionRef.current - 125) / 160)); };
  }, []);
    
  return (
    <>
      <FlatList
        ref={scrollRef}
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
        onScroll={onScroll}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        getItemLayout={(data, index) => ({ length: 160, offset: 125 + 160 * index, index})}
        initialScrollIndex={scrollIndex}
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