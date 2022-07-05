import React from "react";
import "./Notes.css";

export default function Notes(props) {
  return (
    <div className="note" style={{ backgroundColor: props.notes.color }}>
      <textarea
        className="note_text"
        defaultValue={props.notes.color}
      ></textarea>
      <p>{props.notes.time}</p>
    </div>
  );
}
