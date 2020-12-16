import React from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';
import { useHistory } from 'react-router-native';

import ReviewItem from './ReviewItem';
import Loading from './Loading';
import ItemSeparator from './ItemSeparator';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import Button from './Button';
import theme from './theme';
import useRemoveReview from '../hooks/useRemoveReview';
import Text from './Text';

const MyReviewsPage = () => {
  const { authorizedUser, loading, error, refetch } = useAuthorizedUser(true);

  const reviewNodes = authorizedUser ?
    authorizedUser.reviews.edges.map(node => node)
    : [];

  if (!loading && !reviewNodes.length) return <Text>No reviews :(</Text>;

  return <FlatList
    data={reviewNodes}
    renderItem={({ item }) => <MyReviewsItem review={item.node} refetchReviews={refetch} />}
    ItemSeparatorComponent={ItemSeparator}
    ListFooterComponent={<Loading loading={loading} error={error} errorMessage={errorMessage} />}
    keyExtractor={({ node }) =>  node.id} 
  />;
};

const MyReviewsItem = ({ review, refetchReviews }) => {
  const history = useHistory();
  const [remove] = useRemoveReview(review.id);

  const onPressRepo = goToRepository(review.repositoryId, history);
  const createAlert = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review',
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: async () => removeReview(remove, refetchReviews) }
      ],
    );
  };
  
  return (
    <View style={styles.container}>
      <ReviewItem review={review} />
      <View style={styles.buttonContainer}>
        <Button text='View repository' color='blue' style={styles.button} onPress={onPressRepo} />
        <Button text='Delete review' color='red' style={styles.button} onPress={createAlert} />
      </View>
    </View>
  );
};

const goToRepository = (id, history) => () => { history.push(`/repository/${id}`);};
const removeReview = async (remove, refetch) => {
  try {
    await remove();
    refetch();
  } catch(e) {
    console.error(e);
  }
};
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
