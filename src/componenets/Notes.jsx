import React from "react";
import './Notes.css'
function Notes(props) {
    return (
        <div className="Notes">
            <h3>{props.title}</h3>
            <div className="overflow">

                <p>{props.content}</p>
            </div>
            <button className="edit" onClick={()=>{
                 props.editNote(props)
            }}>Edit</button>
            <button className="del" onClick={() => {
                props.delNote(props)
                // console.log(props, "working")
            }}>Del</button>
        </div>
    );
}

export default Notes;

