import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

import Text from './Text';
import RepositoryStat from './RepositoryStat';
import theme from './theme';

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.primaryInfo}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: repository.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text fontWeight='bold' testID='repositoryFullName'>{repository.fullName}</Text>
          <Text>{repository.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{repository.language}</Text>
          </View>
        </View>
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

export const TouchableRepositoryItem = ({ repository }) => {
  const history = useHistory();

  const viewRepository = () => {
    history.push(`/repository/${repository.id}`);
  };

  return (
    <TouchableOpacity onPress={viewRepository}>
      <RepositoryItem repository={repository} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.repositoryBackground,
    padding: 8,
  },
  primaryInfo: {
    flexDirection: 'row',
  },
  imageContainer: {
    paddingTop: 10,
    alignItems: 'center',
    width: '20%',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 4,
  },
  descriptionContainer: {
    justifyContent: 'center',
    width: '80%',
  },
  secondaryInfo: {
    flexDirection: 'row',
  }, 
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  language: {
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    borderRadius: 4,
    color: '#ffffff',
    backgroundColor: '#457ad6'
  }
});

export default RepositoryItem;