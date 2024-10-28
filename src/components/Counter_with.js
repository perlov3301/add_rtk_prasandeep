import React from 'react';
import { useState } from 'react';
import { connect } from "react-redux";

const Counter_with = ({ counter, increment, decrement }) => {
    // const [counter, setCounter] = useState(0);
    // function increment() {
    //     setCounter(counter=>counter+1);
    //   }
    // function decrement() {
    //     setCounter(counter=>counter-1);
    //   }
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
const mapStateToProps = (state)=> ({
 //  Use 'counter: state.counter.counter' and replace the 
 //above line if you are using combineReducers to ensure 
 //that 'counter' matches the correct key in your store.
//for export rootReducer=combineReducers:
  counter: state.counter.counter//combineReducers
//state.counter for export counterReducer
});

export default Counter_with;
