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
    first: 4, 
    after: '', 
    orderBy, 
    orderDirection, 
    searchKeyword
  });

  return {
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    repositories,
    loading, 
    error,
    fetchMore
  };
};

export default useRepositoriesState;