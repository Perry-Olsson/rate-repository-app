import React from 'react';
import { Formik } from 'formik';
import CreateReviewForm from './CreateReviewForm';

const CreateReview = () => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
  </Formik>
);

const initialValues = {
  owner: '',
  name: '',
  rating: '',
  review: '',
};

const onSubmit = (values) => {
  console.log(values);
};

export default CreateReview;