import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { SignInContainer } from '../components/SignIn';

describe('SignIn', () => {
  describe('SignInForm', () => {
    it('fires onSubmit handler provided by props with correct arguments', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByTestId('usernameField'), 'Kalle');
      fireEvent.changeText(getByTestId('passwordField', 'password'));
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});