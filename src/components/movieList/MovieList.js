import MovieItem from "./MovieItem";
import React, { useEffect, useState } from "react";
import { getTag } from "../../features/tags/tagsSlice";
import { useSelector } from "react-redux";
import axios from "axios";
export default function MovieList() {
  const tagState = useSelector(getTag);
  const [movieData, setMovieData] = useState([]);

  const API_URL = "https://my.api.mockaroo.com/movies.json?key=3bc829b0";
  useEffect(async () => {
    async function fetchData() {
      const response = await axios(API_URL);
      setMovieData(response.data);
    }
    // if (!movieData)
    // fetchData();
  }, []);
  function MovieListGenerator({ MoviesData }) {
    return MoviesData?.map((movie) => {
      return <MovieItem key={movie.id} movie={movie} />;
    });
  }
  console.log({ tagState });
  console.log(movieData);
  return (
    <>
      <ul>
        <MovieListGenerator MoviesData={movieData} />
      </ul>
    </>
  );
}
