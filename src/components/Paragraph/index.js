import React from "react";
import "./style.css";

function Paragraph(props) {
  return <p className="paragraph">{props.children}</p>;
}

export default Paragraph;