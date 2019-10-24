import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="btnSpecial">
        {props.special}
      </button>
    </>
  );
};
export default SpecialButton;