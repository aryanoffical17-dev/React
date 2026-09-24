import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authservice from './appwrite/auth'
import { login, logout } from "./store/authslice"
import { Outlet } from 'react-router-dom'
import{Footer,Header} from './components'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch(() => {
        dispatch(logout());
      })
      .finally(() => setloading(false));
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>test
      <div className='w-full block'>
        <header />
        <main>
          {/* <Outlet /> */}
        </main>
        <footer />
      </div>
    </div>
  ) : null
}

export default App
