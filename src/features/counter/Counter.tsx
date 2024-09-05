import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./counterSlice"

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>Counter</div>
  )
}

export default Counter