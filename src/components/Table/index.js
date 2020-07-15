import React from "react";
import "./style.css";

function Table(props) {
  return <table className="table">{props.children}</table>;
}

export default Table;