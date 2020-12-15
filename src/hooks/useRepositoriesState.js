import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import useRepositories from './useRepositories';

const useRepositoriesState = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKeyword] = useDebounce(searchQuery, 500);
  const [sortOrder, setSortOrder] = useState({ 
    orderBy: "CREATED_AT", 
    orderDirection: "DESC"
  });
  const { orderBy, orderDirection } = sortOrder;
  const { repositories, loading, error, fetchMore } = useRepositories({ 
    first: 10, 
    after: '', 
    orderBy, 
    orderDirection, 
    searchKeyword
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);

  return {
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
  };
};

export default useRepositoriesState;