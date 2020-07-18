import React from "react";
import "./style.css";

function Option(props) {
  return (
    <option value={props.children} className="option">{props.children}</option>
  );
}

export default Option;
