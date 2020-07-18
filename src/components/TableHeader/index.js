import React from "react";
import "./style.css";

function TableHeader(props) {
  return <th className="table-header" data-text={props.children} onClick={props.handleColClick}>{props.children}</th>;
}

export default TableHeader;