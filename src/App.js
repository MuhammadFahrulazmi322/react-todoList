import React from "react";
import "./styles.css";

import Header from "./component/Header";
import Todoform from "./component/Todoform";
import Todos from "./component/Todos";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <Header></Header>
        <Todoform></Todoform>
        <Todos></Todos>
      </div>
    </div>
  );
}
