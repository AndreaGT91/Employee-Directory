import React from "react";
import "./style.css";

function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className="label">{props.children}</label>
  );
}

export default Label;
