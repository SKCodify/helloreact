import { useContext, useState } from "react";
import UserContext from "../utils/usercontext";

const SearchContainer = (props) => {
  const { callback } = props;
  const [searchText, setSearchText] = useState("");
  const { userName, setUserName } = useContext(UserContext);

  return (
    <div className="search-container">
      <input
        type="text"
        className=" m-4 border border-indigo-200"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setUserName(e.target.value);
        }}
      ></input>
      <label className="p-2 bg-yellow-200">{userName}</label>
      <button
        className="bg-green-200 px-4 rounded-md"
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
