import React, { useState } from "react";
import "./Textarea.css";
import Notes from "./Notes";
function Textarea(props) {
  const [note, setNote] = useState({
    id: 0,
    title: "",
    content: "",
  });

  const Inputhandle = (e) =>{
    const {name, value} = e.target; 
    setNote((prev)=>{
        return {
            ...prev,
              [name]: value,
              id: Math.floor(Math.random() * 1000)
        }
    })
  }
  const AddEvent = (e)=>{
    e.preventDefault()
    if(note.title=='' || note.content=='' ){
        alert('Enter Title and Content')
    }
    else{
        props.passNote(note)
        setNote(()=>{
            return { 
                title: "",
                content: "",
            }
        })   
    }
  }
  return (
    <div className="Textarea">
      <form action="">
        <input
          type="text"
          placeholder="Note Title"
          name="title"
          value={note.title}
          onChange={Inputhandle}
        />
        <br />
        <textarea
          name="content"
          id=""
          value={note.content}
          onChange={Inputhandle}
          cols="30"
          rows="10"
          placeholder="Write a note"
        ></textarea>
        <br />
        <button onClick={AddEvent}>Add Note</button>
      </form>
    </div>
  );
}

export default Textarea;
