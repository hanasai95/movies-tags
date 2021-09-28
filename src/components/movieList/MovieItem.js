import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieList from ".";
import { updateTag, getTag } from "../../features/tags/tagsSlice";

export default function MovieItem({ movie }) {
  const dispatch = useDispatch();
  function handleUpdateTag() {
    dispatch(updateTag({ id: "1", tagNames: "test" }));
  }
  return (
    <div>
      {movie.name}
      <button onClick={handleUpdateTag}>Add Tag</button>
    </div>
  );
}
