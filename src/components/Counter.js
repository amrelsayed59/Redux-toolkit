import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementAction,
  incByValueAction,
  incrementAction,
} from '../redux/actions/counterActions';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = (val) => {
    incrementAction(val, dispatch);
  };
  const handleDecrement = (val) => {
    decrementAction(val, dispatch);
  };
  const handleIncByValue = (val) => {
    incByValueAction(val, dispatch);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleDecrement(1)}>Decrement</button>
      <button onClick={() => handleIncByValue(3)}>Inc 5</button>
    </>
  );
};

export default Counter;
