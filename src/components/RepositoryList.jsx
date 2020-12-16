import React, { useState, useRef, useEffect } from 'react';
import { FlatList } from 'react-native';

import ItemSeparator from './ItemSeparator';
import { TouchableRepositoryItem } from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
import Loading from './Loading';

const RepositoryList = ({ state }) => {
  const { 
    scrollPosition,
    setScrollPosition,
    fetchMore, 
    ...rest
  } = state;
  const [firstRender, setFirstRender] = useState(true);

  const onScroll = (event) => { 
    if (firstRender){
      //So initialScrollIndex doesnt set scroll position
      setScrollPosition((scrollPosition) => scrollPosition);
      setFirstRender(false);
    } else
      setScrollPosition(event.nativeEvent.contentOffset.y);
  };

  const onEndReach = () => { fetchMore(); };

  return (
    <>
      <RepositoryListContainer 
        scrollPosition={scrollPosition}
        onScroll={onScroll}
        onEndReach={onEndReach}
        {...rest}
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
    return () => setScrollIndex(getScrollIndex(scrollPositionRef.current)); 
  }, []);

  const scrollToLastPosition = () => {
    setTimeout(() => {
      scrollRef.current.scrollToOffset({
        offset: scrollPosition,
        animated: false,
      });
    }, 1);
  };
  
  return (
    <>
      <FlatList
        onLayout={scrollToLastPosition}
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
        ListFooterComponent={<Loading loading={loading} error={error} errorMessage={errorMessage} />}
        onScroll={onScroll}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        getItemLayout={(data, index) => ({ length: 170, offset: 125 + 170 * index, index})}
        initialScrollIndex={scrollIndex}
      />
    </>
  );
};

const getScrollIndex = (position) => Math.floor((position - 125) / 160);
const errorMessage = 'Could not fetch repositories';

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