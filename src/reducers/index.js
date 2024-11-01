import { combineReducers } from 'redux';
import counterReducer from './reducerC';

  // combine Reducers
  const rootReducer = combineReducers({
    counter: counterReducer,
    // add  other reducers here
  });

export default rootReducer;
/**
 const initialState = {
    counter: 0,
};

const counterReducer = (
    state=initialState, 
    action
  ) => {
    switch (action.type) {
        case 'INCREMENT': 
          return {...state, counter: state.counter+1};
        case 'DECREMENT': 
          return {...state, counter: state.counter-1};
        default:
          return   state;
    }
  };
 */