import React from "react";
import "./style.css";

function Heading(props) {
  return <h1 className="heading">{props.children}</h1>;
}

export default Heading;