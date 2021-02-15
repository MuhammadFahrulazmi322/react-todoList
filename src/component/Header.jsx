import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <header>
      <button className="header-btn">Add</button>
      <h1 className="header-tittle">todo List</h1>
      <button className="header-btn kiri">Clear</button>
    </header>
  );
}
