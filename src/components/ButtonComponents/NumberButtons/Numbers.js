import React, { useState } from "react";
import NumberButton from './NumberButton';
import "../Button.css";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

import { numbers } from '../../../data';
import { operators } from "../../../data";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  // const [numberState, setNumberState] = useState(numbers)

  return (
    <>
    <div>
    {numbers.map((item,index)=>{
       if (item==0){
        return <NumberButton key={String(item)+String(index)} number={item} className="button number0Button" update={props.update} cv={props.cv}/>
       } else {
        return <NumberButton key={String(item)+String(index)} number={item} className="button numberButton" update={props.update} cv={props.cv}/>
       }

      })}
      {/* {numbers.map((number, index) => (
        <NumberButton 
          numbers={number}
          key={index}
          />
      ))} */}
    </div>
    </>
  );
};

export default Numbers;
// STEP 3 - Use .map() to iterate over your array data and return a button
       //component matching the name on the provided file. 
       // Pass it any props needed by the child component*/