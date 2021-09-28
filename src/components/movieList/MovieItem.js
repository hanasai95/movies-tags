import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTag, getTag } from "../../features/tags/tagsSlice";
import "../../../src/App.css";
export default function MovieItem({ movie }) {
  const [tag, setTag] = useState("");
  const [error, setError] = useState("");
  const [tagList, setTagList] = useState([]);
  const tagState = useSelector(getTag);
  useEffect(() => {
    if (tagState.tags[movie.id.toString()])
      setTagList(tagState.tags[movie.id.toString()]);
  }, [tagList]);
  const dispatch = useDispatch();
  function handleTag(e) {
    setTag(e.target.value);
  }
  function handleAddTag(e) {
    if (tag.length < 15 && tagList.length < 5 && !tagList.includes(tag)) {
      setTagList([...tagList, tag]);
      dispatch(
        updateTag({ id: movie.id.toString(), tagNames: [...tagList, tag] })
      );
    }
    if (tag.length > 15) setError("Tag must not be longer than 15 letters");
    if (tagList.length >= 5) setError("5 tags is the maxium");
    setTag("");
  }

  function handleRemoveTag(e) {
    const tagListFilter = tagList.filter((tag) => {
      return tag != e?.target?.name;
    });
    setTagList([...tagList, tagListFilter]);
    dispatch(updateTag({ id: movie.id.toString(), tagNames: tagListFilter }));
  }

  function TagsGenerator() {
    return tagList.map((tag, index) => (
      <div key={index} className={"tag-box"}>
        {tag}
        <button
          className="cancel-tag-button"
          key={index}
          onClick={handleRemoveTag}
          name={tag}
        >
          {"X"}
        </button>
      </div>
    ));
  }

  return (
    <li key={movie.id}>
      <div className="error">{error ? error : ""}</div>
      <div className="item-list">
        <div className="movie-name-date">
          <span>{movie.name}</span>
          <span>{movie.created_at}</span>
        </div>
        <div className="tags-container">
          <TagsGenerator />
        </div>

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
