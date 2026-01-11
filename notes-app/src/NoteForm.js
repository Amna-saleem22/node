import React, { useState, useEffect } from "react";

function NoteForm({ addNote, editNote, updateNote, onClose }) {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setDes(editNote.des);
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !des.trim()) {
      alert("Title & Description required");
      return;
    }

    if (editNote) {
      updateNote({ id: editNote.id, title, des });
    } else {
      addNote({ id: Date.now(), title, des });
    }

    setTitle("");
    setDes("");
  };

  return (
    <div className="note-form-wrapper">
      <form className="note-form" onSubmit={handleSubmit}>
        {/* Close button top-right */}
        <button type="button" className="close-form" onClick={onClose}>
          ❌
        </button>

        <h3>{editNote ? "Update Note" : "Add Note"}</h3>

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Note Description"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />

        <button type="submit">{editNote ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default NoteForm;
