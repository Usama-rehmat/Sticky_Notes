import React, { useState } from 'react'
import Header from './componenets/Header'
import Textarea from "./componenets/Textarea"
import Notes from './componenets/Notes'
    
function App() {
  const [addItems, setAddItems] = useState([])
  const AddNote = (note)=>{
    setAddItems((prev)=>{
      return [...prev, note]   
    })
    // console.log(note)
  }
  // const editNote = (props)=>{
   
  // }
  const deleteNote = (props)=>{
    const newArr = addItems.filter((val,index)=> val.id !== props.id );
    setAddItems(newArr)
  }
  return (
    <>
     <Header />
     <Textarea passNote={AddNote}/>
     {
      addItems.map((val,index)=>{
        return <Notes key={index} id={val.id} title={val.title} content={val.content} delNote={deleteNote}/>
      })
     }
    
    </>
  )
}

export default App


