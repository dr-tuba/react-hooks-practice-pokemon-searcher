import React from "react";

function Search({ pokemon, handleTextChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleTextChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
