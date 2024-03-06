import ItemList from "./ItemList";

const ResCategory = ({ data, showList, updateIndex }) => {
  const { title } = data.card;

  // console.log(props.data.card?.["@type"]);
  console.log(showList);
  const list =
    data.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      ? data.card?.categories[0]?.itemCards
      : data.card?.itemCards;

  const handleClick = () => {
    console.log(updateIndex);
    updateIndex();
  };
  return (
    <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold ">
          {title} ({list.length})
        </span>
        <span>⬇️</span>
      </div>
      {showList && <ItemList list={list} />}
    </div>
  );
};

export default ResCategory;
