import { useEffect, useState } from "react";
import { json } from "react-router";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const ResDetail = () => {
  const [resDetail, setResDetail] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://mocki.io/v1/7eb39873-6285-4d02-814b-7d2c5356e913"
    );
    const json = await data.json();
    setResDetail(json);
  };
  return resDetail === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resDetail?.page_info?.ogTitle}</h1>
    </div>
  );
};

export default ResDetail;
