import React from "react";
import { DeleteOutlineRounded } from "@material-ui/icons";

function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <button onClick={handleClick}>
        <DeleteOutlineRounded/></button>
    </div>
}

export default Note;