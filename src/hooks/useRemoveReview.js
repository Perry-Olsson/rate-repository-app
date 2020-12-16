import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../graphql/mutations';

const useRemoveReview = (id) => {
  const [mutate, { error }] = useMutation(DELETE_REVIEW);

  const remove = async () => {
    const { data } = await mutate({ variables: { id }});
    return data;
  };

  return [remove, error];
};

export default useRemoveReview;