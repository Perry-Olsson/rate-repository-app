import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import CreateReviewForm from './CreateReviewForm';

const CreateReview = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const initialValues = {
  owner: '',
  name: '',
  rating: '',
  review: '',
};

const onSubmit = (values) => {
  console.log(values);
};

yup.setLocale({
  number: {
    default: 'Number 1-100 required'
  }
});

const validationSchema = yup.object().shape({
  owner: yup.string().required('Repository owner required'),
  name: yup.string().required('Repository name required'),
  rating: yup.number().required('Rating between 1-100 is required').min(1).max(100),
  review: yup.string(),
});

export default CreateReview;