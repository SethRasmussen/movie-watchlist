import React from "react";

const MovieCard = (props) => {
  const { addMovie, movie, removeMovie, list } = props;

  const inWatchlist = list.filter((checkMovie) => {
    return checkMovie.id === movie.id;
  });

  const button =
    inWatchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add movie</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove movie</button>
    );

  return (
    <div className="movie-card" key={movie.id}>
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h2>{movie.original_title}</h2>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
