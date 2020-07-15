import React from "react";
import "./style.css";

function TableData(props) {
  return <table className="table-data">{props.children}</table>;
}

export default TableData;