import React from "react";

import MovieCard from "./MovieCard";

const Watchlist = (props) => {
  const { list, addMovie, removeMovie } = props;

  const movieDisplay = list.map((movie) => {
    return (
      <MovieCard
        addMovie={addMovie}
        movie={movie}
        removeMovie={removeMovie}
        list={list}
      />
    );
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
