import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const PromoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Should render App correctly`, () => {
  const tree = renderer
    .create(<App
      title={PromoMovie.title}
      genre={PromoMovie.genre}
      year={PromoMovie.year}
      movies={movies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
