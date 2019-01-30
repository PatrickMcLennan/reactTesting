import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm />', () => {
  const { getByTestId, getByText, getByLabelText } = render(
    <MovieForm submitForm={onSubmit} />
  );
  expect(getByTestId('movie-form')).toBeTruthy();

  getByLabelText('Text').value = 'hi';
  fireEvent.change(getByLabelText('Text'));
  fireEvent.click(getByText('Submit'));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    text: 'hi'
  });
});
