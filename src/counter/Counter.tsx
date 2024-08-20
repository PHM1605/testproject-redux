import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { increment, decrement, selectCount, selectStatus, incrementByAmount, incrementAsync, incrementIfOdd } from "./counterSlice";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="row">
        <button className="button" aria-label="Decrement value" onClick={() => {
          dispatch(decrement())
        }}>
          -
        </button>
        <span aria-label="Count">{count}</span>
        <button className="button" aria-label="Increment value" onClick={() => {
          dispatch(increment())
        }}>
          +
        </button>
      </div>
      
      <div className="row">
        <input className="textbox" aria-label="Set increment amount" value={incrementAmount} type="number" 
          onChange={e => { setIncrementAmount(e.target.value)}}/>

        <button className="button" onClick={() => {
          dispatch(incrementByAmount(incrementValue))
        }}>
          Add Amount
        </button>
      </div>

      <div className="row">
        <button className="asyncButton" disabled={status !== "idle"} onClick={()=>{
          dispatch(incrementAsync(incrementValue))
        }}>
          Add Async
        </button>
        <button className="oddButton" onClick={() => {
          dispatch(incrementIfOdd(incrementValue))
        }}>
          Add If Odd
        </button>
      </div>
    </div>
    
  );
}