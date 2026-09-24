import React , {useState,useContext}from 'react'
import Usercontext from '../context/User.Context.js'


function Login() {
  const [username , setusername] = useState('')
  const [password , setpassword] = useState('')

  const {setuser} = useContext(Usercontext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setuser({username , password})
  }


  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value ={username}
      onChange={(e)=> setusername(e.target.value)}
      placeholder='username' />
      <input type="password"
      value ={password}
      onChange={(e)=> setpassword(e.target.value)}
      placeholder='password' />
      <button onClick={handleSubmit}> submit</button>
    </div>
  )
}

export default Login