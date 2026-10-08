import React, { useState } from 'react'

function App() {

  
  const [a,setA] =useState(0)

  function changeNum(){
    setA(a+1)
  }
  const ReduceNum = ()=>{
    setA(a-1)
  }

  return (
    <div>
    <h1>Value of a is {a} </h1>
    <button onClick={changeNum}>Click</button><var><br /></var>
    <button onClick={ReduceNum}>reduce</button>
    
    </div>
  )
}

export default App