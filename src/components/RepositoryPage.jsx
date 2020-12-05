import React from 'react';
import { TouchableHighlight, View, StyleSheet, FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from '../components/Text';
import { openLink } from '../utils';

const RepositoryPage = () => {
  const { id }= useParams();
  const { repository, loading } = useRepository(id);

  return loading ?
    <Text>loading...</Text>
    : (
      <FlatList
        data={repository.reviews.edges}
        renderItem={({ item }) => <Text>{item.node.text}</Text>}
        keyExtractor={({ id }) => id} 
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      />
    );
};

const RepositoryInfo = ({ repository }) => {
  const openGitHub = openLink(repository && repository.url);
  console.log(repository.reviews.edges);
  return (
    <View>
      <RepositoryItem repository={repository} />
      <TouchableHighlight onPress={openGitHub} style={styles.touchable}>
        <Text style={styles.text}>Open in Github</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 4,
    backgroundColor: '#006cf0',
    margin: 10,
  },
  text: {
    color: '#ffffff',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  }
});

export default RepositoryPage;