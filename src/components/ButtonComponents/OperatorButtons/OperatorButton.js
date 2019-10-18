import React from "react";
import { tsPropertySignature, removePropertiesDeep } from "@babel/types";
import { convertPatternGroupsToTasks } from "fast-glob/out/managers/tasks";

export const OperatorButton = (props) => {
  return (
    <>
      <button className="btnOp">{props.char}</button>
    </>
  );
};
{/* Display a button element rendering the data being passed down from the parent container on props */}
//do not understand line 7