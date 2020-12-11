import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async (values) => {
    const { data } = await mutate({ variables: { user: values }});
    return data;
  };

  return [createUser, result];
};

export default useCreateUser;