import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import ReviewItem from './ReviewItem';
import Loading from './Loading';
import ItemSeparator from './ItemSeparator';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import Button from './Button';
import theme from './theme';

const MyReviewsPage = () => {
  const { authorizedUser, loading, error } = useAuthorizedUser(true);

  const reviewNodes = authorizedUser ?
    authorizedUser.reviews.edges.map(node => node)
    : [];

  return <FlatList
    data={reviewNodes}
    renderItem={({ item }) => <MyReviewsItem review={item.node} />}
    ItemSeparatorComponent={ItemSeparator}
    ListFooterComponent={<Loading loading={loading} error={error} errorMessage={errorMessage} />}
    keyExtractor={({ node }) =>  node.id} 
  />;
};

const MyReviewsItem = ({ review }) => {
  const history = useHistory();

  const onPress = goToRepository(review.repositoryId, history);
  
  return (
    <View style={styles.container}>
      <ReviewItem review={review} />
      <View style={styles.buttonContainer}>
        <Button text='View repository' color='blue' style={styles.button} onPress={onPress} />
        <Button text='Delete review' color='red' style={styles.button} />
      </View>
    </View>
  );
};

const goToRepository = (id, history ) => () => { history.push(`/repository/${id}`);};

const errorMessage = 'Could not fetch Reviews';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryBackground
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10
  },
  button: {
    flex: 1,
    margin: 5,
  }
});

export default MyReviewsPage;
