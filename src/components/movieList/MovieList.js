import MovieItem from "./MovieItem";
import React from "react";
import { getTag } from "../../features/tags/tagsSlice";
import { useSelector } from "react-redux";

export default function MovieList() {
  const tagState = useSelector(getTag);
  console.log({ tagState });
  return (
    <div>
      <MovieItem />
      MovieList
    </div>
  );
}
