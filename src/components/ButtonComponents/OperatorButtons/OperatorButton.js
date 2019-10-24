import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className="btnOp">
        {props.operator.char}
      </button>
    </>
  );
};
export default OperatorButton;