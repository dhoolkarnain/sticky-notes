import React from "react";
import Notes from "../Notes/Notes";
import "./Notecontainer.css";

export default function Notecontainer(props) {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container-notes custom-scroll">
        {props.notes.map((item, index) => (
          <Notes key={index} notes={item} />
        ))}
      </div>
    </div>
  );
}
