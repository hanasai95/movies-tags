import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieList from ".";
import { updateTag, getTag } from "../../features/tags/tagsSlice";

export default function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState([]);

  function handleAddTag() {
    dispatch(updateTag({ id: "1", tagNames: "test" }));
  }

  function handleTag(e) {
    setTag(e.target.value);
  }
  return (
    <li key={movie.id}>
      <div className="item-list">
        <span>{movie.name}</span>
        <div></div>
        <div className="input-container">
          <input
            className="tag-input"
            onChange={handleTag}
            value={tag}
            type="text"
            placeholder="enter tag"
          />
        </div>
        <div className="button-container">
          <button
            className="add-tag-button"
            name={movie.id}
            onClick={handleAddTag}
          >
            Add Tag
          </button>
        </div>
      </div>
    </li>
  );
}
