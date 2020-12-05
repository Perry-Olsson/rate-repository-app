import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORY, { variables: { id }});
  const repository = error || loading ? null : data.repository; 

  return { repository , loading, error, refetch };
};

export default useRepository;