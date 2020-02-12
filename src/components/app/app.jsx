import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const onHeaderClick = () => {};

const App = (props) => {
  const {title, genre, year, movies} = props;

  return (
    <Main
      title={title}
      genre={genre}
      year={year}
      movies={movies}
      onHeaderClick={onHeaderClick}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
