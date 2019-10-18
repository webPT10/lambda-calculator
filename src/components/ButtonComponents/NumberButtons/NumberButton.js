import React from "react";

export const NumberButton = (props) => {
  console.log("props", props)

  return (
    <div>
      <button className="btnNum">{props.numbers}</button>
    </div>
  );
};
{/* Display a button element rendering the data being passed down from the parent container on props */}