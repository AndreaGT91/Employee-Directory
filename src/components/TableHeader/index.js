import React from "react";
import "./style.css";

function TableHeader(props) {
  return <th className="table-header">{props.children}</th>;
}

export default TableHeader;