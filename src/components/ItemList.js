import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ list }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <ul>
        {list.map((l) => {
          return (
            <li
              key={l?.card?.info?.id}
              className="  m-8 font-medium border-b-2"
            >
              <div className="flex justify-between">
                <div>{l?.card?.info?.name}</div>
                <div>Rs.{l?.card?.info?.price / 100}/-</div>
              </div>
              <div className="font-light flex text-gray-400 py-2 text-sm justify-between">
                {l?.card?.info?.category}
                <button
                  className="text-white border rounded-md bg-gray-700 font-semibold p-2"
                  onClick={() => handleClick(l)}
                >
                  Add +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ItemList;
