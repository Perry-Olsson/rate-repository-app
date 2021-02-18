import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const useSignOut = (resetRepositoriesState) => {
  const authStorage = useContext(AuthStorageContext);
  const client = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
    resetRepositoriesState();
  };

  return signOut;
};

export default useSignOut;