import { useQuery } from '@apollo/react-hooks';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (includeReviews=false) => {
  const { data, loading, error, refetch } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { 
      includeReviews
    }
  });
  
  return { authorizedUser: data ? data.authorizedUser : undefined, loading, error, refetch };
};

export default useAuthorizedUser;