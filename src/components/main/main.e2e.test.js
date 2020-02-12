import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const PromoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Header click callback should be called`, () => {
  const onHeaderClick = jest.fn();

  const main = shallow(
      <Main
        title={PromoMovie.title}
        genre={PromoMovie.genre}
        year={PromoMovie.year}
        movies={movies}
        onHeaderClick={onHeaderClick}
      />
  );

  const header = main.find(`.page-header`);

  header.props().onClick();

  expect(onHeaderClick.mock.calls.length).toBe(1);
});
