import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, incByValue, increment } from '../redux/counterSlice';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = (val) => {
    dispatch(increment(val))
  };
  const handleDecrement = (val) => {
    dispatch(decrement(val))
  };
  const handleIncByValue = (val) => {
    dispatch(incByValue(val))
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleDecrement(1)}>Decrement</button>
      <button onClick={() => handleIncByValue(5)}>Inc 5</button>
    </>
  );
};

export default Counter;
