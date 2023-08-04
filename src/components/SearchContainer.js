import { useState } from "react";

const SearchContainer = (props) => {
  const { callback } = props;
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        className="search-btn"
        onClick={() => {
          callback(searchText);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchContainer;
