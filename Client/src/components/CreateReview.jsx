import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import CreateReviewForm from './CreateReviewForm';
import useCreateReview from '../hooks/useCreateReview';


const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      const data = await createReview({...values, rating: Number(values.rating)});
      history.push(`/repository/${data.createReview.repositoryId}`);
    } catch(e) {
      console.error(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner required'),
  repositoryName: yup.string().required('Repository name required'),
  rating: yup
    .number()
    .required('Rating between 1-100 is required')
    .min(1)
    .max(100)
    .typeError('Must be a Number 1-100'),
  text: yup.string(),
});

export default CreateReview;