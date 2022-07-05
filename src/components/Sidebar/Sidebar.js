import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      <h1 onClick={() => setListOpen(!listOpen)}>
        <span class="material-symbols-outlined">add</span>
      </h1>
      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {color.map((item, index) => (
          <li
            key={index}
            className="sidebar-list-item"
            style={{ backgroundColor: item }}
          />
        ))}
      </ul>
    </div>
  );
}
