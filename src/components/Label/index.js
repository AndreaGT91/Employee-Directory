import React from "react";

function Label(props) {
  return (
    <label htmlFor={props.htmlFor}>{props.children}</label>
  );
}

export default Label;
