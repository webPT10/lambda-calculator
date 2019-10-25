import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";
import "../Button.css";

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log(props.updateState)

  return (
    <div className="numberContainer">
      {numberState.map((number, index) => (
        <NumberButton 
          key={index}
          numbers={number}
          updateState={props.updateState}
        />
        )
      )}
    </div>
  );
};
export default Numbers;