import React from "react";
import "./style.css";

function Label(props) {
  return (
    <label htmlFor={props.children} className="label">{props.children}</label>
  );
}

export default Label;
