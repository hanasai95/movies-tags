import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTag, getTag } from "../../features/tags/tagsSlice";

export default function MovieItem() {
  const dispatch = useDispatch();
  function handleUpdateTag() {
    dispatch(updateTag({ id: "1", tagNames: "test" }));
  }
  return (
    <div>
      MovieItem
      <button onClick={handleUpdateTag}>TestRedux</button>
    </div>
  );
}
