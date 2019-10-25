import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <button className="btnNum" onClick={() => props.updateState(props.numbers)}>
        {props.numbers}
      </button>
    </>
  );
};
export default NumberButton;