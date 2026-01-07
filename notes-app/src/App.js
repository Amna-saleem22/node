import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";

function App() {
    const [notes, setNotes] = useState([
        { id: 1, title: "React", des: "JS Library" },
    ]);

    const addNote = (note) => {
        setNotes([...notes, { ...note, id: Date.now() }]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((n) => n.id !== id));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            notes={notes}
                            deleteNote={deleteNote}
                        />
                    }
                />
                <Route
                    path="/add"
                    element={<AddNote addNote={addNote} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
