import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import Loading from './Loading';

const RepositoryPage = () => {
  const { id } = useParams();
  const { repository, loading, error, fetchMore } = useRepository({ id, first: 8, after: ''});

  const onEndReach = () => {
    fetchMore();
  };

  const reviewNodes = repository ?
    repository.reviews.edges.map(node => node)
    : [];
  
  return (
    <FlatList
      ListHeaderComponent={<RepositoryInfo repository={repository} />}
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={<Loading loading={loading} error={error} />}
      keyExtractor={({ node }) =>  node.id} 
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryPage;