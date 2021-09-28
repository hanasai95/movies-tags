import React, { useContext, useState } from "react";
import AppContext from "../../context";

export default function SearchBar() {
  const { search, setSearch } = useContext(AppContext);
  function handleSearchOnChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="search-input-container">
      {/* <span>@copyright hanaKai</span> */}
      <input
        className="search-input"
        onChange={handleSearchOnChange}
        value={search}
        placeholder="Search Tags"
      />
    </div>
  );
}
