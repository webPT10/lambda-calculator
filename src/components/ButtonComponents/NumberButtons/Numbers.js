import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";
import "../Button.css";

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  
  return (
    <div className="numberContainer">
      {numberState.map((number, index) => (
        <NumberButton 
        key={index}
        numbers={number}
        onClick={props.updateState}
        />
        )
      )}
    </div>
  );
};
export default Numbers;

{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}