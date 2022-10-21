import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      dkeeper.createNote(newNote.title, newNote.content);
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onCreate={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
