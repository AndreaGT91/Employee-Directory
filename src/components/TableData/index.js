import React from "react";
import "./style.css";

function TableData(props) {
  return <td className="table-data">{props.children}</td>;
}

export default TableData;