import { DECREMENT, INCREMENT, INC_BY_VALUE } from '../actions/types';

const initState = {
    count: 0
}

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + action.payload}
    case DECREMENT:
      return {...state, count: state.count - action.payload}
    case INC_BY_VALUE:
      return {...state, count: state.count + action.payload}
    default:
      return state;
  }
};

export default counterReducer;
