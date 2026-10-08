import React, { useState } from 'react'

function App() {

  const[title , settitle]=useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Valaue is submitted",{title})
    settitle('')
  }

  return (
    <div className='parent'>
      <form className='form' onSubmit = {(e)=>{
        submitHandler(e)
      }} >
      <input type="text"
      placeholder='Enter Your name'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <br />
      <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default App