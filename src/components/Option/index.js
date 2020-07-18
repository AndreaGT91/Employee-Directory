import React from "react";

function Option(props) {
  return (
    <option value={props.children}>{props.children}</option>
  );
}

export default Option;
