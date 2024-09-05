import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"

const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const addValue = Number(incrementAmount) || 0; // to remove NaN
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(increment())}>+</button>        
      </div>
      <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(isNaN(Number(e.target.value))?0:Number(e.target.value))}/>

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}

export default Counter