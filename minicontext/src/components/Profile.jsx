import React from 'react'
import  {useContext}  from 'react'
import  Usercontext  from '../context/User.Context.js'


function Profile() {
  const { user } = useContext(Usercontext)

  if(!user) return <h2> please login</h2>

  return <div>Welcome {user.username}</div>
}

export default Profile