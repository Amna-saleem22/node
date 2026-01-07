// import { useState, useEffect } from "react";

// function NoteForm({ addNote, updateNote, currentNote }) {
//     const [title, setTitle] = useState("");
//     const [des, setDes] = useState("");

//     useEffect(() => {
//         if (currentNote) {
//             setTitle(currentNote.title);
//             setDes(currentNote.des);
//         }
//     }, [currentNote]);

//     const handleSubmit = () => {
//         if (!title || !des) return alert("Fill all fields");

//         if (currentNote) {
//             updateNote({ ...currentNote, title, des });
//         } else {
//             addNote({ title, des });
//         }

//         setTitle("");
//         setDes("");
//     };

//     return (
//         <div className="form">
//             <h3>{currentNote ? "Update Note" : "Add Note"}</h3>

//             <input
//                 type="text"
//                 placeholder="Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />

//             <input
//                 type="text"
//                 placeholder="Description"
//                 value={des}
//                 onChange={(e) => setDes(e.target.value)}
//             />

//             <button onClick={handleSubmit}>
//                 {currentNote ? "Update" : "Add"}
//             </button>
//         </div>
//     );
// }

// export default NoteForm;
