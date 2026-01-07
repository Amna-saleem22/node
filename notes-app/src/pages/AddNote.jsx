import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNote({ addNote }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const handleSubmit = () => {
        if (!title || !des) return alert("Fill all fields");

        addNote({ title, des });
        navigate("/");
    };

    return (
        <div>
            <h2>Add New Note</h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Description"
                value={des}
                onChange={(e) => setDes(e.target.value)}
            />

            <button onClick={handleSubmit}>Save</button>
            <button onClick={() => navigate("/")}>Cancel</button>
        </div>
    );
}

export default AddNote;
