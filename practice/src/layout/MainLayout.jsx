import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='app-layout'>
        <NavBar/>

        <main id='main-content'>
            <Outlet/>
        </main>

        <Footer/>
    </div>
  )
}

export default MainLayout