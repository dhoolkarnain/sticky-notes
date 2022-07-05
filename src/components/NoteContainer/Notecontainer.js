import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

export default function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };
  const notes = reverArray(props.notes);
  return (
    <div className="note-container">
      <h2>
        <span class="material-symbols-outlined">description</span> Sticky Notes
      </h2>
      <div className="note-container-Note custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <div
            className="note custom-scroll"
            style={{ backgroundColor: "#e4ee91" }}
          >
            <textarea
              className="note_text custom-scroll"
              defaultValue={
                "Hello, This website is developed by @dhoolkarnain who is a highly competent IT professional and expert in designing websites. Click on plus icon to start making your notes."
              }
            />
            <div className="note-footer">
              <p>Edited: 24th August</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
