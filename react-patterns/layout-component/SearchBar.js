import React from "react";

const SearchBar = () => (
  <form>
    <div className="input-field">
      <input id="search" type="search" required />
      <label htmlFor="search">
        <i className="material-icons">search</i>
      </label>
    </div>
  </form>
);

export default SearchBar;
