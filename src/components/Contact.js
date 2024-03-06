import { useReducer } from "react";

const Contact = () => {
  const logic = (state, action) => {
    return state + action.payload;
  };
  const [count, dispatch] = useReducer(logic, 0);

  const increment = () => {
    dispatch({ type: "inc", payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: "dec", payload: -1 });
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl py-2">Contact</h1>
      <h1 className="font-semibold text-2xl text-blue-600">{count}</h1>
      <div>
        <button
          className="text-lg bg-blue-400 border w-32 border-gray-700 rounded-lg m-3 p-2"
          onClick={increment}
        >
          Increase
        </button>
        <button
          className="text-lg bg-blue-400 border w-32 border-gray-700 rounded-lg p-2"
          onClick={decrement}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Contact;
