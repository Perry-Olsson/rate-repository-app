import React from 'react';
import { View, StyleSheet } from 'react-native';

//components
import Text from './Text';
import RepositoryStat from './RepositoryStat';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 150,
    backgroundColor: theme.colors.repositoryBackground,
    padding: 5,
  },
  primaryInfo: {
    flexGrow: 1,
  },
  secondaryInfo: {
    flexDirection: 'row',
    flexGrow: 1,
  }
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.primaryInfo}>
        <Text>Full name: {repository.fullName}</Text>
        <Text>Description: {repository.description}</Text>
        <Text>Language: {repository.language}</Text>
      </View>
      <View style={styles.secondaryInfo}>
          <RepositoryStat text="Stars" count={repository.stargazersCount} />
          <RepositoryStat text="Forks" count={repository.forksCount} />
          <RepositoryStat text="Reviews" count={repository.reviewCount} />
          <RepositoryStat text="Rating" count={repository.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;