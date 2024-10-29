import React from 'react';
import { useState } from 'react';
import { connect } from "react-redux";

const Counter_with = ({ counter, increment, decrement }) => {
    // const [counter, setCounter] = useState(0);
    // function increment() { setCounter(counter=>counter+1); }
    // function decrement() { setCounter(counter=>counter-1); }
    return (
      <div>
        <fieldset>
          <legend>Counter_with</legend>
          <p>Counter_with: {counter}</p>
          <button onClick={increment} >
            Increment
          </button>
          <button onClick={decrement} >
            Decrement
          </button>
        </fieldset>
      </div>
    );// return
};// const Counter_with
const mapStateToProps = (state)=> ({//state.counter for export counterReducer
 //Use 'counter: state.counter.counter' for combineReducers 
 // to ensure that 'counter' matches the correct key in your store.
  counter: state.counter.counter//combineReducers
});
const mapDispatchToProps= (dispatch) => ({
   increment: () => dispatch({ type: "INCREMENT" }),
   decrement: () => dispatch({ type: "DECREMENT" })
});
//export default Counter_with;
export default connect(mapStateToProps, 
                       mapDispatchToProps
  )(Counter);
