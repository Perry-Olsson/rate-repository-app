import React from 'react';
import { Text } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';

const RepositoryPage = ({ repository }) => {
  const { id }= useParams();

  return (
    <Text>{id}</Text>
  );
};

export default RepositoryPage;