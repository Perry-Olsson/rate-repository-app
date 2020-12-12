import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection}) => {
  console.log(orderBy, orderDirection);
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection
    },
    fetchPolicy: 'cache-and-network'
  });
  const repositories = loading || error ? null : data.repositories;

  return { repositories, loading, error, refetch };
};

export default useRepositories;
