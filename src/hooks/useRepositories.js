import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });
  const repositories = loading || error ? null : data.repositories;

  return { repositories, loading, error, refetch };
};

export default useRepositories;
