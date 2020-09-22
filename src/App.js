import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <header>
          <button className="header-btn">Add</button>
          <h1 className="header-tittle">todo List</h1>
          <button className="header-btn kiri">Clear</button>
        </header>
        <section className="add">
          <form action="" className="add-form">
            <input type="text" name="" id="addTodo" className="addTodo" />
            <input type="submit" value="Add" className="btnAdd" />
          </form>
        </section>
        <section className="todos">
          <div className="todo">
            <span className="todo-text">learning react</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning react</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning react</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning react</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning react</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning react</span>
          </div>
        </section>
      </div>
    </div>
  );
}
