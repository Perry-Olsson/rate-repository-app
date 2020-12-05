import React from 'react';
import { Text } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';

const RepositoryPage = () => {
  const { id }= useParams();
  const { repository, loading } = useRepository(id);
  
  if (loading) return <Text>loading...</Text>;

  return (
    <RepositoryItem repository={repository} />
  );
};

export default RepositoryPage;