import { useEffect, useState } from "react";
import { json } from "react-router";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import ResCategory from "./ResCategory";

const ResDetail = () => {
  const [resDetail, setResDetail] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://run.mocky.io/v3/d5183329-5969-4521-b896-2474eae33c83"
    );
    const json = await data.json();
    setResDetail(json);
  };

  const categories =
    resDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
          c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log("categories", categories);
  return resDetail === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-lg my-2">
        {resDetail?.data?.cards[0]?.card?.card?.info?.name}
      </h1>
      <ul>
        {categories.map((c, index) => {
          return (
            <li className="m-4" key={index}>
              <ResCategory
                data={c?.card}
                showList={index === showIndex ? true : false}
                updateIndex={() =>
                  setShowIndex(showIndex === index ? null : index)
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResDetail;
  