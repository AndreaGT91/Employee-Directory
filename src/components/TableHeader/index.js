import React from "react";
import "./style.css";

function TableHeader(props) {
  return <table className="table-header">{props.children}</table>;
}

export default TableHeader;