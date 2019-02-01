import React from 'react';
import MoviesList from '../MoviesList';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

global.fetch = require('jest-fetch-mock');

afterEach(cleanup);

const movies = {
  success: true,
  results: [
    {
      id: 'string1',
      title: 'string',
      poster_path: 'string'
    },
    {
      id: 'string2',
      title: 'string',
      poster_path: 'string'
    },
    {
      id: 'string3',
      title: 'string',
      poster_path: 'string'
    }
  ]
};

const movie = movies.results[0];

test('<MoviesList />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { getByTestId, getAllByTestId, queryByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(getByTestId('loading')).toBeTruthy();
  await waitForElement(() => getByTestId('movie-link'));
  expect(queryByTestId('loading')).toBeFalsy();
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
  expect(getAllByTestId('movie-link').length).toBe(movies.results.length);
});

test('<MoviesList /> api fail', async () => {
  movies.success = false;
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { getByTestId, getAllByTestId, queryByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(getByTestId('loading')).toBeTruthy();
});
