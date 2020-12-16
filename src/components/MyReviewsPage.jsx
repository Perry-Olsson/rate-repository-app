import React from 'react';
import { FlatList } from 'react-native';

import ReviewItem from './ReviewItem';
import Loading from './Loading';
import ItemSeparator from './ItemSeparator';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const MyReviewsPage = () => {
  const { authorizedUser, loading, error } = useAuthorizedUser(true);

  const reviewNodes = authorizedUser ?
    authorizedUser.reviews.edges.map(node => node)
    : [];

  return <FlatList
    data={reviewNodes}
    renderItem={({ item }) => <ReviewItem review={item.node} />}
    ItemSeparatorComponent={ItemSeparator}
    ListFooterComponent={<Loading loading={loading} error={error} errorMessage={errorMessage} />}
    keyExtractor={({ node }) =>  node.id} 
  />;
};

const errorMessage = 'Could not fetch Reviews';

export default MyReviewsPage;
