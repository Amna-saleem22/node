// function NoteItem({ note, deleteNote }) {
//   return (
//     <div style={{ border: "1px solid gray", margin: 10 }}>
//       <h4>{note.title}</h4>
//       <p>{note.des}</p>
//       <button onClick={() => deleteNote(note.id)}>
//         Delete
//       </button>
//     </div>
//   );
// }

// export default NoteItem;
// // 







function NoteItem({ note, deleteNote, setEditNote, toggleFavorite }) {
  return (
    <div className={`note-card ${note.favorite ? "favorite" : ""}`}>
      <h4>{note.title}</h4>
      <p>{note.des}</p>

      <div className="actions">
        <button className="edit" onClick={() => setEditNote(note)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteNote(note.id)}>
          Delete
        </button>
        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(note.id)}
        >
          {note.favorite ? "⭐" : "☆"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
