import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <button
        className="btnNum"
        onClick={() => props.onClick()}
        >
      </button>
    </>
  );
};
export default NumberButton;