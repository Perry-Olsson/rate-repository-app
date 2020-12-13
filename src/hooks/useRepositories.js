import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const { data, loading, error, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: {
      first: 10,
      after: '',
      ...variables
    },
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  const repositories = loading || error ? null : data.repositories;

  return { repositories, loading, error, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;
