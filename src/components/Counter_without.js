import React from "react";
import { useState } from 'react';

const Counter_without = () => {
    const [counter, setCounter] = useState(0);
    function increment() {
        console.log("Counter_withoutjs;increment");
        setCounter(counter=> counter+1);
      };
    function decrement()  {
        console.log("Counterjs_without;decrement")
        setCounter(counter=> counter-1);
      }
    return (
      <div >
        <fieldset className="counter" >
          <legend>Counter_without</legend>
          <p>Counter_without: {counter}</p>
          <button onClick={increment} >
            Increment
          </button>
          <button onClick={decrement} >
            Decrement
          </button>
        </fieldset>
      </div>
    );
};

export default Counter_without;