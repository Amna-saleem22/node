function NoteItem({ note, deleteNote }) {
    return (
        <div style={{ border: "1px solid gray", margin: 10 }}>
            <h4>{note.title}</h4>
            <p>{note.des}</p>
            <button onClick={() => deleteNote(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default NoteItem;
