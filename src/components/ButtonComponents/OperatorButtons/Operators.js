import React, { useState } from "react";

import { OperatorButton } from "./OperatorButton"
import { operators } from '../../../data';
//import any components needed
//Import your array data to from the provided data file


export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators)
  return (
    <div className="containerOperators">
      {operatorState.map(item => (
        <OperatorButton 
          char={item.char} 
          value={item.value}
          key={item.key} 
        />
      ))}
    </div>
  );
};

{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}