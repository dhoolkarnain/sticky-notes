import React from "react";
import "./Note.css";

let timer = 500,
  timeout;
export default function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let hrs = date.getHours();

    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDay();
    const month = monthNames[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  return (
    <div
      className="note custom-scroll"
      style={{ backgroundColor: props.note.color }}
    >
      <textarea
        className="note_text custom-scroll"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note-footer">
        <p>Edited: {formatDate(props.note.time)}</p>
        <span
          class="material-symbols-outlined"
          onClick={() => props.deleteNote(props.note.id)}
        >
          delete
        </span>
      </div>
    </div>
  );
}
