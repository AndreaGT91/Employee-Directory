import React from "react";
import "./style.css";

function TableRow(props) {
  return <table className="table-row">{props.children}</table>;
}

export default TableRow;