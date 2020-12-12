import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import Text from '../components/Text';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

const RepositoryPage = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepository(id);
  
  if (error) return <Text>Could not fetch repository</Text>;

  return loading ?
    <Text>loading...</Text>
    : (
      <FlatList
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        data={repository.reviews.edges}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ node }) =>  node.id} 
      />
    );
};

export default RepositoryPage;