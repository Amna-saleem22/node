import { useNavigate } from "react-router-dom";
import NoteItem from "../components/NoteItem";

function Home({ notes, deleteNote }) {
    const navigate = useNavigate();

    return (
        <div>
            <h1>My Notes</h1>

            <button onClick={() => navigate("/add")}>
                Add Note
            </button>

            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
}

export default Home;
