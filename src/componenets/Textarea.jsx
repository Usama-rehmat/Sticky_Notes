import React, { useState } from "react";
import "./Textarea.css";
// import Notes from "./Notes";
import { useEffect } from "react";
function Textarea(props) {
  const [note, setNote] = useState({
    id: 0,
    title: "",
    content: "",
  });

  const [isValidNote, setIsValidNote] = useState(false)
  const [isEditValidNote, setIsEditValidNote] = useState(false)

  useEffect(() => {
    if (note.title !== '' && note.content !== '') {
      setIsValidNote(true)
    }
    else {
      setIsValidNote(false)
    }
    if (props.editNote.title !== '' && props.editNote.content !== '') {
      setIsEditValidNote(true)
    }
    else {
      setIsEditValidNote(false)
    }
  }, [note,props.editNote])

  const Inputhandle = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
        id: Math.floor(Math.random() * 1000)
      }
    })
  }
  const AddEvent = (e) => {
    e.preventDefault()
    props.passNote(note)
    setNote(() => {
      return {
        title: "",
        content: "",
      }
    })
  }
  return (
    <div className="Textarea">
      {props.isEdit ?
        <form action="">
          <input
            type="text"
            placeholder="Note Title"
            name="title"
            value={props.editNote.title}
            onChange={props.editInputhandle}
          />
          <br />
          <textarea
            name="content"
            id=""
            value={props.editNote.content}
            onChange={props.editInputhandle}
            cols="30"
            rows="10"
            placeholder="Write a note"
          ></textarea>
          <br />
          <button disabled={!isEditValidNote}  onClick={props.editNoteArray}>Edit Note</button>
        </form>
        :
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
          <button disabled={!isValidNote} onClick={AddEvent}>Add Note</button>
        </form>
      }
    </div>
  );
}

export default Textarea;
