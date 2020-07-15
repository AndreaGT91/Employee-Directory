import React from "react";
import "./style.css";

function TableRow(props) {
  return <tr className="table-row">{props.children}</tr>;
}

export default TableRow;