import React from 'react'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import NavBar from './components/NavBar.jsx'
import MainLayout from './layout/MainLayout.jsx'
import {Link , Route ,Routes} from 'react-router-dom'



function App() {
  return (

        <Routes >
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
  )
}

export default App