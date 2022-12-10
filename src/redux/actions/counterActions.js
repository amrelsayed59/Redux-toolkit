import { DECREMENT, INCREMENT, INC_BY_VALUE } from './types';

// export const incrementAction = (val) => {
//   return {
//     type: INCREMENT,
//     payload: val
//   };
// };

export const incrementAction = async (val, dispatch) => {
    return dispatch({
        type: INCREMENT,
        payload: val
    })
  };

export const decrementAction = (val, dispatch) => {
  return dispatch ({
    type: DECREMENT,
    payload: val
  });
};

export const incByValueAction = (val, dispatch) => {
    return dispatch({
      type: INC_BY_VALUE,
      payload: val,
    });
  };
