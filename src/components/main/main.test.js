import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const PromoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

const onHeaderClick = () => {};

it(`Should render main page`, () => {
  const tree = renderer
    .create(<Main
      title={PromoMovie.title}
      genre={PromoMovie.genre}
      year={PromoMovie.year}
      movies={movies}
      onHeaderClick={onHeaderClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
