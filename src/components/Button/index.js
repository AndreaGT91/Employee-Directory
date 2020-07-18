import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button type="Submit" onClick={props.onClick} className="button">{props.children}</button>
  );
}

export default Button;
