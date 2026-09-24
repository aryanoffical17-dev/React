import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'
import './App.css'

function App() {

  return (
    <>
      <h1>Learn Redux Tool Kit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
