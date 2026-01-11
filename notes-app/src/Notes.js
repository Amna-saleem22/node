// import React from "react";
// import NoteItem from "./NoteItem";

// function Notes({ notes, deleteNote }) {
//   return (
//     <div>
//       {notes.map(note => (
//         <NoteItem
//           key={note.id}
//           note={note}
//           deleteNote={deleteNote}
//         />
//       ))}
//     </div>
//   );
// }

// export default Notes;







import React from "react";
import NoteItem from "./NoteItem";

function Notes({ notes, deleteNote, setEditNote, toggleFavorite }) {
  return (
    <div className="notes">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          setEditNote={setEditNote}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default Notes;
