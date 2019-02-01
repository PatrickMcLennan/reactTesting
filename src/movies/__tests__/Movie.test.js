import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Movie, { POSTER_PATH } from '../Movie';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Movie />', () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalledTimes(1);
});

const movie = {
  id: 'hi',
  title: 'Level Up Big Day Out',
  poster_path: 'fdfdff.jpg'
};

test('<Movie /> with movie', () => {
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId('movie-img').src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
});
