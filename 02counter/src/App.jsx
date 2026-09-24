import React ,{ useState } from 'react';

import './App.css'

function App() {

  const [counter ,setCounter ] =useState(5)



  // let counter = 5 

  const addValue =() =>{
    if(counter === 20){
      console.log(`stop your value is reached to the max ,${counter}`);
      return ;
    }
    setCounter(counter +1)
    
  }
  const removeValue = () =>{
    if(counter ===0){
      console.log(`stop your value is reached to the lowwer ,${counter}`);
      return ;
    } 
    setCounter(counter-1)
  }

  return (
    <>
      <h1>BABU BAHIYA</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick = {addValue}>Add value</button> 
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
