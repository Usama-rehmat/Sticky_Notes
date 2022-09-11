import React, { useState } from 'react'
import Header from './componenets/Header'
import Textarea from "./componenets/Textarea"
import Notes from './componenets/Notes'

function App() {
  const [addItems, setAddItems] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [editNote, setEditNote] = useState({})
  const AddNote = (note) => {
    setAddItems((prev) => {
      return [...prev, note]
    })
    // console.log(note)
  }
  const editNoteFun = (props) => {
    setEditNote({ id: props.id, title: props.title, content: props.content })
    setIsEdit(true)
  }

  const editInputhandle = (e) => {
    const { name, value } = e.target;
    setEditNote((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const editNoteArray = (e) => {
    e.preventDefault()
    console.log(editNote)
    let newNoteArray = addItems.map((obj) => {
      return obj.id === editNote.id ? editNote : obj
    })
    setAddItems(newNoteArray)
    setIsEdit(false)
  }

  const deleteNote = (props) => {
    const newArr = addItems.filter((val, index) => val.id !== props.id);
    setAddItems(newArr)
  }
  return (
    <>
      <Header />
      <Textarea passNote={AddNote} editNoteArray={editNoteArray} editInputhandle={editInputhandle} isEdit={isEdit} editNote={editNote} />
      {
        addItems.map((val, index) => {
          return <Notes key={index} id={val.id} title={val.title} content={val.content} editNote={editNoteFun} delNote={deleteNote} />
        })
      }

    </>
  )
}

export default App


