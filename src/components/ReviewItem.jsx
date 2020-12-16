import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns';
import { useLocation } from 'react-router-native';

import Text from './Text';
import theme from './theme';

const ReviewItem = ({ review }) => {
  const { pathname } = useLocation();
  const header = pathname === '/my-reviews' ? review.repository.fullName : review.user.username;
  
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingBorder}>
          <Text color='primary'>{review.rating}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight='bold'>{header}</Text>
        <Text style={styles.date}>{format(parseISO(review.createdAt), 'MM/dd/yyyy')}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: theme.colors.repositoryBackground,
  },
  ratingBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 5,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: theme.colors.primary
  },
  textContainer: {
    flex: 7
  },
  date: {
    color: theme.colors.textTertiary,
    marginBottom: 3,
  }
});

export default ReviewItem;