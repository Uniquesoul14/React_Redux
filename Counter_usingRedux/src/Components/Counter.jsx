import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Features/createSlice";

const Counter = () => {
  const Count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Redux Toolkit Counter</h2>
      <h1>{Count}</h1>

      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};

export default Counter