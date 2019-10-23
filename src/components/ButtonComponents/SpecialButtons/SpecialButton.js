import React from "react";

const SpecialButton = (props) => {
  return (
      <button
        className="btnSpecial"
        onClick={()=>props.update(props.special)}
        >{props.specials}</button>
  );
};
export default SpecialButton;