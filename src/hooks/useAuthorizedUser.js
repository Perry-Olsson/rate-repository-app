import { useQuery } from '@apollo/react-hooks';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const { data, loading, error } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });
  
  return { authorizedUser: data ? data.authorizedUser : undefined, loading, error };
};

export default useAuthorizedUser;