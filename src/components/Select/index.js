import React from "react";
import "./style.css";

function Select(props) {
  return (
    <select name={props.name} className="select" value={props.value} onChange={props.onChange}>{props.children}</select>
  );
}

export default Select;
