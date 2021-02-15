import React, { useState } from "react";
import "../styles.css";
import PropTypes from "prop-types";

export default function Todoform({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "" || value === " ") {
      alert("No blank Input");
      return;
    }

    addtodo(value);

    alert(value);
    setValue(" ");
  };
  return (
    <section className="add">
      <form action="" className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="addTodo"
          className="addTodo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btnAdd">
          Add
        </button>
      </form>
    </section>
  );
}

Todoform.proptypes = {
  addTodo: PropTypes.func.isRequired
};
