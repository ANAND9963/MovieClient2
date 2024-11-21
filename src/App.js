import "./App.css";

import {apiClient} from "./api/axiosConfig";

import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";
import Auth from "./components/auth/Auth";
import { Signup } from "./components/signup/Signup";



function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      const response = await apiClient.get("/api/v1/movies");

      console.log(response.data);

      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await apiClient.get(`/api/v1/movies/imdb/${movieId}`);
      const singlemovie = response.data;
      setMovie(singlemovie);

      setReviews(singlemovie.reviewIds);
    } catch (er) {
      console.log(er, "error");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header></Header>

      <Routes>
        

        <Route path="/" element={<Auth />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/movies" element={<Home movies={movies} />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
        <Route
          path="/Reviews/:movieId"
          element={
            <Reviews
              getMovieData={getMovieData}
              movie={movie}
              reviews={reviews}
              setReviews={setReviews}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
