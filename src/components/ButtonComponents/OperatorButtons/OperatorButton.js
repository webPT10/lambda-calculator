import React from "react";

const OperatorButton = (props) => {
  return (
      <button
        value="{props.value"
        className='button operatorButton'
        onClick={()=>props.update(props.value)
        }
        >{props.char}
      </button>
  );
};
export default OperatorButton;