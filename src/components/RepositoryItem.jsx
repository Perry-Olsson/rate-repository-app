import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

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
    flexDirection: 'row',
    flexGrow: 1,
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
    flexGrow: 1,
  }, 
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  language: {
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    borderRadius: 3,
    color: '#ffffff',
    backgroundColor: '#457ad6'
  }
});

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
          <Text fontWeight='bold'>{repository.fullName}</Text>
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

export default RepositoryItem;