import React, { useContext, useState } from "react";
import AppContext from "../../context";
import SearchIcon from "./search.png";
export default function SearchBar() {
  const { search, setSearch } = useContext(AppContext);
  function handleSearchOnChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="search-input-container">
      <input
        className="search-input"
        onChange={handleSearchOnChange}
        value={search}
        placeholder="Search Tags"
      />
    </div>
  );
}
