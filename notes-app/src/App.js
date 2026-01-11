// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       hello 
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";
// import Notes from "./Notes";

// function App() {
//   const [notes, setNotes] = useState([
//     { id: 1, title: "Note 1", des: "First note" },
//     { id: 2, title: "Note 2", des: "Second note" }
//   ]);

//   const deleteNote = (id) => {
//     setNotes(notes.filter(note => note.id !== id));
//   };

//   return (
//     <div>
//       <h2>My Notes</h2>
//       <Notes notes={notes} deleteNote={deleteNote} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import NoteForm from "./NoteForm";
import Notes from "./Notes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false); // favorite filter

  const addNote = (note) => {
    const exists = notes.some(
      n => n.title.toLowerCase() === note.title.toLowerCase()
    );
    if (exists) {
      alert("Note title already exists");
      return;
    }
    setNotes([...notes, { ...note, favorite: false }]);
    setShowForm(false);
    setShowFavorites(false);
  };

  const updateNote = (updatedNote) => {
    const exists = notes.some(
      n =>
        n.title.toLowerCase() === updatedNote.title.toLowerCase() &&
        n.id !== updatedNote.id
    );
    if (exists) {
      alert("Same title already exists");
      return;
    }
    setNotes(notes.map(n => n.id === updatedNote.id ? { ...updatedNote, favorite: n.favorite } : n));
    setEditNote(null);
    setShowForm(false);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const toggleFavorite = (id) => {
    setNotes(
      notes.map(n =>
        n.id === id ? { ...n, favorite: !n.favorite } : n
      )
    );
  };

  // Decide which notes to show
  const displayedNotes = showFavorites
    ? notes.filter(n => n.favorite)
    : notes;

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2 className="logo">𝕊𝕠 𝕡𝕖𝕣𝕙𝕒𝕡𝕤</h2>
        <ul>
          <li onClick={() => setShowFavorites(false)}>📝 Notes</li>
          <li onClick={() => setShowForm(true)}>➕ Add Note</li>
          <li onClick={() => setShowFavorites(true)}>⭐ Favorites</li>
          <li>⚙ Settings</li>
        </ul>
      </aside>

      {/* Main Area */}
      <div className="main">
        {/* Top Bar */}
        <div className="topbar">
          <span
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Toggle Sidebar"
          >
            {sidebarOpen ? "⬅️" : "➡️"}
          </span>
          <span className="login-icon">🔐</span>
          <span
            className="add-icon"
            title="Add Note"
            onClick={() => setShowForm(true)}
          >
            ➕
          </span>
        </div>

        {/* Show Add / Edit Form */}
        {showForm && (
          <NoteForm
            addNote={addNote}
            editNote={editNote}
            updateNote={updateNote}
            onClose={() => setShowForm(false)}
          />
        )}

        {/* Notes List */}
        <Notes
          notes={displayedNotes}  // filtered notes
          deleteNote={deleteNote}
          setEditNote={(note) => {
            setEditNote(note);
            setShowForm(true);
          }}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}

export default App;
