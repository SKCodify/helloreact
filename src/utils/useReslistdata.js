import { useEffect, useState } from "react";

const useReslistdata = () => {
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
    setFilterRes(json);
    setOrigResList(json);
  };
  return [filterRes, origResList];
};

export default useReslistdata;
