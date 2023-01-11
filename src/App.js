import React, { useState, useEffect, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import MovieScreen from "./Components/MovieScreen";
import Watchlist from "./Components/Watchlist";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([
    //{ original_title: "Movie 1", id: 1 }
  ]);

  const addMovie = (movie) => {
    setList((prevList) => {
      return [...prevList, movie];
    });
  };

  const removeMovie = (removedMovie) => {
    const newState = list.filter((movie) => {
      return movie != removedMovie;
    });
    setList(newState);
  };

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          removeMovie={removeMovie}
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
        />
        <Watchlist list={list} addMovie={addMovie} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
