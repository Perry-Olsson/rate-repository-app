import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useContext(AuthStorageContext);
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { credentials: { username, password }}});
    await authStorage.setAccessToken(data.authorize.accessToken);
    client.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;