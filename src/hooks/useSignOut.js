import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const client = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return signOut;
};

export default useSignOut;