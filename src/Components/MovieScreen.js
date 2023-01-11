import React from "react";

import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { movieList, addMovie, removeMovie, page, setPage, list } = props;

  const movieDisplay = movieList.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        list={list}
      />
    );
  });

  const decrement = () => {
    setPage((prevState) => {
      return prevState - 1;
    });
  };

  const increment = () => {
    setPage((prevState) => {
      return prevState + 1;
    });
  };

  // const decrement = () => setPage(page - 1);
  // const increment = () => setPage(page + 1);

  return (
    <div className={"page"}>
      <h1>Seth's Movie Theatre</h1>
      <h3>Add a Movie to your watchlist</h3>
      <div className={"btn-container"}>
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className={"movie-container"}> {movieDisplay} </div>
    </div>
  );
};

export default MovieScreen;
