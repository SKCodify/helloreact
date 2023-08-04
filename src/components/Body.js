import SearchContainer from "./SearchContainer";
import ResContainer from "./ResContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [origResList, setOrigResList] = useState([]);
  let [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://mocki.io/v1/716edeca-942f-43e7-bb8f-5c9cf825057a"
    );

    const json = await data.json();
    console.log("json", json);
    setFilterRes(json);
    setOrigResList(json);
  };
  return (
    <div>
      <button
        className="filter-btn"
        onClick={() => {
          console.log("tappes");
          filterRes = origResList.filter((res) => {
            console.log(res.info.rating);
            return res.info.rating !== undefined;
          });
          setFilterRes(filterRes);
        }}
      >
        Top Rated
      </button>
      <SearchContainer
        callback={(text) => {
          if (text) {
            filterRes = origResList.filter((res) => {
              return res.info.name.includes(text);
            });
            setFilterRes(filterRes);
          } else {
            setFilterRes(origResList);
          }
        }}
      />
      {filterRes.length < 1 ? <Shimmer /> : <ResContainer list={filterRes} />}
    </div>
  );
};

export default Body;
