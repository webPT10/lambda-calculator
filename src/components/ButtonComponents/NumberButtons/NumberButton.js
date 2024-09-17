import React from "react";

const NumberButton = (props) => {
  console.log("props", props)

  return (
    <button className={props.className}
    onClick={()=>props.update(String(props.number)) 
      }
    >{props.number}</button>
    // <>
    //   <button className="btnNum">{props.numbers}</button>
    // </>
  );
};
export default NumberButton;