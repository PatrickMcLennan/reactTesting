import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import MovieDetail from '../MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
});

const match = {
  params: {
    id: 'gfbgfdd dn'
  }
};

const movie = {
  id: 'Hi',
  title: 'Level Up Rules'
};

test('<Movie />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movie));
  const { getByTestId } = render(<MovieDetail match={match} />);
  await waitForElement(() => getByTestId('movie-title'));

  expect(getByTestId('movie-title').textContent).toBe(movie.title);
});
