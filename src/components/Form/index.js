import React from "react";
import "./style.css";

function Form(props) {
  return (
    <form className="form" action="">{props.children}</form>
  );
}

export default Form;
