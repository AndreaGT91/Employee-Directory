import React from "react";
import "./style.css";

function RadioButton(props) {
  return (
    <input type="radio" id={props.children} name={props.children} value={props.children} className="radioButton"></input>
  );
}

export default RadioButton;
