import React, {useState} from "react";
import { Add, ZoomIn } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

function WriteArea(props) {
    const [note, saveNote] = useState({
        title: "",
        body: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function handleChange(event){
        const {name, value} = event.target;
        
        saveNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submit(event) {
        props.onAdd(note);
        event.preventDefault();
        saveNote({
            title:"",
            body:""
        });
        setExpanded(false);
    }

    return (
    <div>
        <form className="create-note">
            {isExpanded && <input name="title" onChange={handleChange} value={note.title} placeholder="title"/>}
            <textarea name="body" onClick={expand} onChange={handleChange} value={note.body} placeholder="new note.." rows={isExpanded ? 3 : 1}/>
            <Zoom in={isExpanded}>
            <Fab onClick={submit}><Add/></Fab>
            </Zoom>
        </form>
    </div>
    );
}

export default WriteArea;