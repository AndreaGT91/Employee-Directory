import React from "react";
import "./style.css";

function Input(props) {
  return (
    <input type="search" name={props.children} className="input"></input>
  );
}

export default Input;
