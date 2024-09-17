import React from "react";

import OperatorButton from "./OperatorButton"
import { operators } from '../../../data';
import "../Button.css"
//import any components needed
//Import your array data to from the provided data file


const Operators = (props) => {
  // STEP 2 - add the imported data to state

  return (
      <div className="containerOperators">
        {operators.map(item => (
          <OperatorButton 
            char={item.char} 
            value={item.value}
            key={item.key} 
            update={props.update}
            cv={props.cv}
          />
        ))}
      </div>
  );
};
export default Operators;
{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}