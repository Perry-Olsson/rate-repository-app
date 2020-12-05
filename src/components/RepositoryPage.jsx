import React from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from '../components/Text';

const RepositoryPage = () => {
  const { id }= useParams();
  const { repository, loading } = useRepository(id);
  
  if (loading) return <Text>loading...</Text>;

  return (
    <View>
      <RepositoryItem repository={repository} />
      <TouchableHighlight style={styles.touchable}>
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