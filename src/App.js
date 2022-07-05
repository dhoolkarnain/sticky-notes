import React from "react";
import Notecontainer from "./components/NoteContainer/Notecontainer";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const notes = [
    {
      text: "shjahjaka",
      time: "3:12 AM",
      color: "cyan",
    },
    {
      text: "shjahjaka",
      time: "3:12 AM",
      color: "yellow",
    },
    {
      text: "shjahjaka",
      time: "3:12 AM",
      color: "pink",
    },
    {
      text: "shjahjaka",
      time: "3:12 AM",
      color: "orange",
    },
  ];
  return (
    <div className="App">
      <Sidebar />
      <Notecontainer notes={notes} />
    </div>
  );
}

export default App;
