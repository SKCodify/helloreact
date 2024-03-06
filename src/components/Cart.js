import { useSelector, useSelectore } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 mx-auto my-2">
      <div className=" bg-green-200  flex justify-between align-middle rounded-lg p-2">
        <div className="text-center text-4xl font-medium">Cart</div>
        <button
          className="bg-gray-700 font-semibold text-yellow-400 rounded-md px-2"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
      </div>
      <ItemList list={cartItems}></ItemList>
    </div>
  );
};
export default Cart;
